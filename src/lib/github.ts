/**
 * @fileOverview Utility to fetch latest release information from GitHub.
 */

export interface GitHubRelease {
  version: string;
  size: string;
  downloadUrl: string;
  publishedAt: string;
  body: string;
}

const REPO_OWNER = 'shreyasvengurlekar';
const REPO_NAME = 'desk-assistant-ai-application';

/**
 * Fetches the latest release data from GitHub.
 * Results are cached for 60 seconds using Next.js Incremental Static Regeneration.
 * This ensures the site feels "live" without hitting GitHub's API rate limits.
 */
export async function getLatestRelease(): Promise<GitHubRelease | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
        headers: {
          'User-Agent': 'Desk-Assistant-AI-Website',
        },
      }
    );

    if (!res.ok) {
      console.warn(`GitHub API responded with ${res.status}: ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    
    // We assume the first asset is the main installer (.exe)
    const asset = data.assets?.[0];

    // Format size from bytes to MB
    const sizeInBytes = asset?.size || 0;
    const sizeInMB = sizeInBytes > 0 ? (sizeInBytes / (1024 * 1024)).toFixed(1) : '50.0';

    return {
      version: data.tag_name || 'v1.0.0',
      size: `${sizeInMB} MB`,
      downloadUrl: asset?.browser_download_url || `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/latest`,
      publishedAt: data.published_at,
      body: data.body || 'Initial stable release of Desk Assistant AI.',
    };
  } catch (error) {
    console.error('Error fetching GitHub release:', error);
    return null;
  }
}
