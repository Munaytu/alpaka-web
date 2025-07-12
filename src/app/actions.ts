
'use server';

import { summarizeCryptoNews, type SummarizeCryptoNewsInput } from '@/ai/flows/summarize-crypto-news';

export async function getSummary(input: SummarizeCryptoNewsInput) {
  try {
    const result = await summarizeCryptoNews(input);
    return { summary: result.summary };
  } catch (error) {
    console.error('AI Summary Error:', error);
    return { error: 'Failed to generate summary. The AI service may be temporarily unavailable.' };
  }
}
