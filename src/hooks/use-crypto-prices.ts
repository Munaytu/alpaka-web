
import { useState, useEffect } from 'react';
import { FormattedCryptoData } from '@/types';
import { fetchInitialCryptoPrices } from '@/lib/data-fetcher';

export function useCryptoPrices(initialData: FormattedCryptoData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(!initialData.lastUpdated);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const newData = await fetchInitialCryptoPrices();
      setData(newData);
      setLoading(false);
    };

    const interval = setInterval(fetchData, 120000);

    return () => clearInterval(interval);
  }, []);

  return { ...data, loading };
}
''