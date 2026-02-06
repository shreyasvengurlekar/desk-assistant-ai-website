'use server';

/**
 * @fileOverview AI-powered file organization suggestions.
 *
 * - suggestFileOrganization - A function that suggests file organization for a given folder.
 * - SuggestFileOrganizationInput - The input type for the suggestFileOrganization function.
 * - SuggestFileOrganizationOutput - The return type for the suggestFileOrganization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestFileOrganizationInputSchema = z.object({
  folderPath: z
    .string()
    .describe('The path to the folder to be organized.'),
  fileList: z.array(z.string()).describe('A list of file names in the folder.'),
});
export type SuggestFileOrganizationInput = z.infer<
  typeof SuggestFileOrganizationInputSchema
>;

const SuggestFileOrganizationOutputSchema = z.object({
  suggestedFolders: z
    .array(z.string())
    .describe('Suggested folder names for organizing the files.'),
  fileToFolderMap: z
    .record(z.string(), z.string())
    .describe('A map of file names to suggested folder names.'),
  summary: z.string().describe('A summary of the file organization suggestions.'),
});
export type SuggestFileOrganizationOutput = z.infer<
  typeof SuggestFileOrganizationOutputSchema
>;

export async function suggestFileOrganization(
  input: SuggestFileOrganizationInput
): Promise<SuggestFileOrganizationOutput> {
  return suggestFileOrganizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestFileOrganizationPrompt',
  input: {schema: SuggestFileOrganizationInputSchema},
  output: {schema: SuggestFileOrganizationOutputSchema},
  prompt: `You are an AI assistant specializing in file organization.

You are provided with a folder path and a list of files within that folder.
Your task is to suggest an improved folder structure and file organization within that structure.

Folder path: {{{folderPath}}}
Files: {{#each fileList}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Consider the content and type of the files when making your suggestions.
Provide a concise summary of your suggestions.

Output the suggested folder names and a mapping of files to folders.
`,
});

const suggestFileOrganizationFlow = ai.defineFlow(
  {
    name: 'suggestFileOrganizationFlow',
    inputSchema: SuggestFileOrganizationInputSchema,
    outputSchema: SuggestFileOrganizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
