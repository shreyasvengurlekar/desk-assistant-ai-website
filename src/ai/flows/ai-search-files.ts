'use server';

/**
 * @fileOverview AI-powered file search using natural language.
 *
 * - aiSearchFiles - A function that searches for files using natural language.
 * - AiSearchFilesInput - The input type for the aiSearchFiles function.
 * - AiSearchFilesOutput - The return type for the aiSearchFiles function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSearchFilesInputSchema = z.object({
  query: z.string().describe('The natural language query to search for files.'),
});
export type AiSearchFilesInput = z.infer<typeof AiSearchFilesInputSchema>;

const AiSearchFilesOutputSchema = z.object({
  results: z.string().describe('A list of file paths that match the query.'),
});
export type AiSearchFilesOutput = z.infer<typeof AiSearchFilesOutputSchema>;

export async function aiSearchFiles(input: AiSearchFilesInput): Promise<AiSearchFilesOutput> {
  return aiSearchFilesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSearchFilesPrompt',
  input: {schema: AiSearchFilesInputSchema},
  output: {schema: AiSearchFilesOutputSchema},
  prompt: `You are a file search assistant. The user will provide a query in natural language, and you should return a list of file paths that match the query. The file paths should be separated by newlines.\n\nQuery: {{{query}}}`,
});

const aiSearchFilesFlow = ai.defineFlow(
  {
    name: 'aiSearchFilesFlow',
    inputSchema: AiSearchFilesInputSchema,
    outputSchema: AiSearchFilesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
