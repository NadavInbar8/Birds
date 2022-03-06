import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const BIRDS_URL = 'https://zapari.any.do/birds/20';

function useFetch(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [birds, setBirds] = useState([]);

  const birdsQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(BIRDS_URL);
      await setBirds((prev) => [...prev, ...res.data.items]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [page]);

  useEffect(() => {
    birdsQuery();
  }, [birdsQuery, page]);

  return { loading, error, birds };
}

export default useFetch;
