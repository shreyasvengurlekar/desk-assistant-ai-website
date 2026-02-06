import { config } from 'dotenv';
config();

import '@/ai/flows/auto-categorize-files.ts';
import '@/ai/flows/ai-search-files.ts';
import '@/ai/flows/suggest-file-organization.ts';