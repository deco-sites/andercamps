export interface Resultado {
  total: number;
}

export default async function productVotes(): Promise<Resultado> {
  const res = await fetch(`https://camp-api.deco.cx/events`, {
    method: "GET",
    headers: { "x-api-key": "andercamps" },
  });
  const data = await res.json();
  return data;
}
