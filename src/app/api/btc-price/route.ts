import { NextResponse } from 'next/server';

let cachedBtcPrice: { data: any; timestamp: number } | null = null;
const CACHE_DURATION = 30 * 1000; // 30 seconds

export async function GET() {
  try {
    const now = Date.now();

    if (cachedBtcPrice && (now - cachedBtcPrice.timestamp < CACHE_DURATION)) {
      // Return cached data if it's still fresh
      return NextResponse.json(cachedBtcPrice.data);
    }

    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd', { cache: 'no-store' });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`CoinGecko API error: ${response.status} ${response.statusText} - ${errorText}`);
      // If API fails, return stale cache if available, otherwise return error
      if (cachedBtcPrice) {
        console.warn("CoinGecko API failed, returning stale BTC price from cache.");
        return NextResponse.json(cachedBtcPrice.data);
      }
      return NextResponse.json({ error: `Failed to fetch BTC price: ${response.statusText}` }, { status: response.status });
    }

    const data = await response.json();
    cachedBtcPrice = { data, timestamp: now }; // Update cache
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching BTC price from CoinGecko via API route:', error);
    // If an error occurs, return stale cache if available, otherwise return internal server error
    if (cachedBtcPrice) {
      console.warn("Error occurred, returning stale BTC price from cache.");
      return NextResponse.json(cachedBtcPrice.data);
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}