import { SaleData } from "@/types/types";

async function fetchData(url: string): Promise<SaleData[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP error statue: " + response.status);
    }

    const data = await response.json();

    if (!data.success) {
      alert(data.message);
      return [];
    } else {
      return data.documents;
    }
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function fetchSales(query?: string): Promise<SaleData[]> {
  let apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/sales`;

  if (query) {
    apiUrl += `?q=${query}`;
  }

  return fetchData(apiUrl);
}

export async function fetchRecentSales(): Promise<SaleData[]> {
  const apiRecentUrl = `${process.env.NEXT_PUBLIC_API_URL}/sales/recent`;
  return fetchData(apiRecentUrl);
}

export async function fetchSalesById(id: number): Promise<SaleData[]> {
  const apiIdUrl = `${process.env.NEXT_PUBLIC_API_URL}/sales/${id}`;
  return fetchData(apiIdUrl);
}
