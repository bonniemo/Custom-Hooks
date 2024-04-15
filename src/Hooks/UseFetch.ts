import { useEffect } from "react"

type FetchTypes = {
    url: string;
}

export const UseFetch = ({url}:FetchTypes) => {
    useEffect(() => {
      const baseUrl = {url}
      const fetchData = async () => {
        const result = await fetch(baseUrl);
        const data = await result.json();

        if (!ignore) {}
      };
      let ignore = false; 
      fetchData();
      return () => {
        ignore = true;
      };
    }, []);
}