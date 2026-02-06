'use server';
/**
 * @fileOverview This file defines a Genkit flow for automatically categorizing files based on their content and type.
 *
 * - autoCategorizeFiles - A function that initiates the file categorization process.
 * - AutoCategorizeFilesInput - The input type for the autoCategorizeFiles function.
 * - AutoCategorizeFilesOutput - The return type for the autoCategorizeFiles function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutoCategorizeFilesInputSchema = z.object({
  fileDataUri: z
    .string()
    .describe(
      "A file's data, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  fileName: z.string().describe('The name of the file to categorize.'),
});
export type AutoCategorizeFilesInput = z.infer<typeof AutoCategorizeFilesInputSchema>;

const AutoCategorizeFilesOutputSchema = z.object({
  category: z.string().describe('The predicted category for the file.'),
  confidence: z
    .number()
    .describe('The confidence level of the category prediction (0-1).'),
});
export type AutoCategorizeFilesOutput = z.infer<typeof AutoCategorizeFilesOutputSchema>;

export async function autoCategorizeFiles(
  input: AutoCategorizeFilesInput
): Promise<AutoCategorizeFilesOutput> {
  return autoCategorizeFilesFlow(input);
}

const autoCategorizeFilesPrompt = ai.definePrompt({
  name: 'autoCategorizeFilesPrompt',
  input: {schema: AutoCategorizeFilesInputSchema},
  output: {schema: AutoCategorizeFilesOutputSchema},
  prompt: `You are an AI file categorization expert. Given a file's data, determine the most appropriate category for it.

  File Name: {{{fileName}}}
  File Data: {{fileDataUri}}

  Respond with a JSON object containing the 'category' and a 'confidence' score (0-1).  The category should be a single word or short phrase.
  `,
});

const autoCategorizeFilesFlow = ai.defineFlow(
  {
    name: 'autoCategorizeFilesFlow',
    inputSchema: AutoCategorizeFilesInputSchema,
    outputSchema: AutoCategorizeFilesOutputSchema,
  },
  async input => {
    const {output} = await autoCategorizeFilesPrompt(input);
    return output!;
  }
);
