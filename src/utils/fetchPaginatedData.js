import { useState, useEffect } from "react";
const proxyUrl = import.meta.env.VITE_REVERSE_PROXY_URL;
const womenAppID = import.meta.env.VITE_WOMEN_APP_ID;
const womenApiKey = import.meta.env.VITE_WOMEN_API_KEY;
const womenOrgID = import.meta.env.VITE_WOMEN_API_ORG_ID;
const menAppID = import.meta.env.VITE_MEN_APP_ID;
const menApiKey = import.meta.env.VITE_MEN_API_KEY;
const menOrgID = import.meta.env.VITE_MEN_API_ORG_ID;
const useFetchMenData = (page) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${proxyUrl}/products?organization_id=${menOrgID}&reverse_sort=false&page=${page}&size=10&Appid=${menAppID}&Apikey=${menApiKey}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return { data, loading, error };
};
const fetchWoMenData = async (page) => {
  const response = await fetch(
    `${proxyUrl}/products?organization_id=${womenOrgID}&reverse_sort=false&page=${page}&size=10&Appid=${womenAppID}&Apikey=${womenApiKey}`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};


export {useFetchMenData, fetchWoMenData}


