import { useDebugValue, useEffect, useState,useCallback } from "react";
export const useHttp = () => {
  const request = useCallback(
    async (
      url: string,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
      } catch (e) {
        throw e;
      }
    },
    []
  );

  return { request };
};


export function useLocalStorage(key: string, initialState: any) {
  const [state, setState] = useState(initialState);
  useDebugValue(state);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) setState(parse(item));
  }, []);

  return [state, setState];
}

function parse(obj: any) {
  try {
    return JSON.parse(obj);
  } catch {
    return obj;
  }
}