import { Quotes } from "deco-sites/andercamps/loaders/Quotes/zenquotes.ts";

export interface Prop {
  quantity?: number;
}

// Utilizando API do Quotables para obter citações aleatórias.
export default async function quotables(
  prop: Prop,
  _req: Request,
  _ctx: unknown,
): Promise<Quotes> {
  const quantity = prop.quantity ?? 1;
  const promises = Array.from({ length: quantity }).map(() =>
    fetch("https://api.quotable.io/random")
  );

  // Aguarda as 'promises' e armazena as respostas em 'responses'.
  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map((res) => res.json()));
  return { data: data.map((quote) => quote.content) };
}
