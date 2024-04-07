export interface Resultado {
  product: string;
}

export interface Props {
  productId: string;
}

export default async function productVotes(
  { productId }: Props,
): Promise<Resultado> {
  const res = await fetch(`https://camp-api.deco.cx/event/${productId}`, {
    method: "GET",
    headers: { "x-api-key": "andercamps" },
  });
  const data = await res.json();
  return data;
}
