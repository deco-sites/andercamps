import { Product } from "apps/commerce/types.ts";
import ProductCard from "deco-sites/andercamps/components/Conexões Culturais/ProductCard.tsx";

export interface Products {
  errorFallback?: boolean;
  items: Product[] | null;
}

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <>
      <span>{error?.message}</span>
    </>
  );
}

export default function HorizontalProductCard(
  { items, errorFallback = false }: Products,
) {
  if (errorFallback) {
    throw new Error("Fallback de Erro: Forçado pelo Administrador");
  }

  return (
    <div class="container mx-5 md:mx-10 xl:mx-auto py-20 ">
      <ul class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard items={items} />
      </ul>
    </div>
  );
}
