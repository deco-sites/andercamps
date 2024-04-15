import { Product } from "apps/commerce/types.ts";
import ProductCard from "deco-sites/andercamps/components/Conexões Culturais/ProductCard.tsx";
import HorizontalSkeleton from "deco-sites/andercamps/components/Conex%C3%B5es%20Culturais/HorizontalSkeleton.tsx";
import { ProductFlagProps } from "deco-sites/andercamps/flags/multivariate/ProductCardFlag.ts";

export interface Products {
  errorFallback?: boolean;
  items: ProductFlagProps;
}

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <>
      <div class="container mx-auto py-20">
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <li>
            {/* Amsterdam */}
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">Amsterdam</h3>
                <p class="text-gray-600 mb-4">
                  Cidade cosmopolita conhecida por sua arte, história e estilo
                  de vida progressista.
                </p>
                <a
                  href="/culturas?flag=amsterdam"
                  target="_blank"
                  class="inline-block bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </li>

          <li>
            {/* Brazil */}
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">Brazil</h3>
                <p class="text-gray-600 mb-4">
                  Rica diversidade cultural com influências indígenas, africanas
                  e europeias.
                </p>
                <a
                  href="/culturas?flag=brazil"
                  target="_blank"
                  class="inline-block bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </li>

          <li>
            {/* Japão */}
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">Japão</h3>
                <p class="text-gray-600 mb-4">
                  Misto fascinante de tradição e modernidade, famoso por sua
                  gastronomia refinada e tecnologia avançada.
                </p>
                <a
                  href="/culturas?flag=japan"
                  target="_blank"
                  class="inline-block bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <span class="sr-only">{error?.message}</span>
    </>
  );
}

export function LoadingFallback() {
  return (
    <div class="container mx-auto py-20">
      <ul class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, index) => <HorizontalSkeleton />)}
      </ul>
    </div>
  );
}

export default function HorizontalProductCard(
  { items, errorFallback = false }: Products,
) {
  if (errorFallback) {
    throw new Error("Fallback de Erro: Forçado pelo Administrador");
  }

  return (
    <div class="container mx-auto py-20 ">
      <ul class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard items={items} />
      </ul>
    </div>
  );
}
