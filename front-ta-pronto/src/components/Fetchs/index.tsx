import React, { useEffect, useState } from "react";

interface FetchsProps {
  url: string;
  method: string;
}

interface ApiResponse {
  data: any;
}

export function Fetchs({ url, method }: FetchsProps): string | null {
  const [responseData, setResponseData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { method });
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const data = await response.json();
        setResponseData({ data });
      } catch (error) {
        setError('Ocorreu um erro ao buscar os dados');
      }
    };

    fetchData();
  }, [url, method]);

  if (error) {
    return null;
  }

  return JSON.stringify(responseData?.data) ?? null;
}
