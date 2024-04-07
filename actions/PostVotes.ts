export interface Resultado {
  total: number;
  product: number;
}

export interface Props {
  productId: string;
}

export default async function PostVotes(props: Props): Promise<Resultado> {
  const res = await fetch(`https://camp-api.deco.cx/event`, {
    method: "POST",
    headers: { "x-api-key": "andercamps" },
    body: JSON.stringify(props),
  });
  const data = await res.json();
  return data;
}
