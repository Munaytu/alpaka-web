'use server';
/**
 * @fileOverview This file defines a Genkit flow for summarizing crypto news relevant to the Bolivian context.
 *
 * - summarizeCryptoNews - A function that summarizes crypto news.
 * - SummarizeCryptoNewsInput - The input type for the summarizeCryptoNews function.
 * - SummarizeCryptoNewsOutput - The return type for the summarizeCryptoNews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCryptoNewsInputSchema = z.object({
  newsArticles: z.array(
    z.object({
      title: z.string().describe('The title of the news article.'),
      content: z.string().describe('The content of the news article.'),
      url: z.string().describe('The URL of the news article.'),
    })
  ).describe('An array of news articles to summarize.'),
});
export type SummarizeCryptoNewsInput = z.infer<typeof SummarizeCryptoNewsInputSchema>;

const SummarizeCryptoNewsOutputSchema = z.object({
  summary: z.string().describe('A summary of the crypto news relevant to the Bolivian context.'),
});
export type SummarizeCryptoNewsOutput = z.infer<typeof SummarizeCryptoNewsOutputSchema>;

export async function summarizeCryptoNews(input: SummarizeCryptoNewsInput): Promise<SummarizeCryptoNewsOutput> {
  return summarizeCryptoNewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCryptoNewsPrompt',
  input: {schema: SummarizeCryptoNewsInputSchema},
  output: {schema: SummarizeCryptoNewsOutputSchema},
  prompt: `You are an AI assistant that summarizes crypto news articles, tailoring the summary to be relevant to the Bolivian context.

  Here are the news articles:
  {{#each newsArticles}}
  Title: {{this.title}}
  Content: {{this.content}}
  URL: {{this.url}}
  ---
  {{/each}}

  Please provide a concise summary of the key information, highlighting aspects that would be of particular interest or importance to Bolivian readers. Focus on the implications for the Bolivian crypto market, regulatory changes affecting Bolivians, or opportunities/risks for Bolivian crypto users and investors.
  `,
});

const summarizeCryptoNewsFlow = ai.defineFlow(
  {
    name: 'summarizeCryptoNewsFlow',
    inputSchema: SummarizeCryptoNewsInputSchema,
    outputSchema: SummarizeCryptoNewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
