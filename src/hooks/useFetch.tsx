import { useEffect, useState, useCallback } from 'react';
import { api } from 'src/services/api';

export default function useFetch(url: string) {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(url);
      setData(response.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, setLoading, setData, setError]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { data, error, loading, setData };
}
