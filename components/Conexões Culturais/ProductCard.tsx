import { Products } from "deco-sites/andercamps/sections/Conexões Culturais/HorizontalProductCard.tsx";
import Image from "apps/website/components/Image.tsx";
import Votes from "deco-sites/andercamps/islands/votes.tsx";

export function LoadingFallback() {
  return (
    <div class="container mx-5 md:mx-10 xl:mx-auto py-20 ">
      <ul class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <li
            key={index}
            className="flex flex-row max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4 col-span-1 min-w-full"
          >
            <figure className="w-1/3">
              <div className="skeleton w-full h-48"></div>
            </figure>
            <div className="flex flex-col justify-between p-4 w-2/3">
              <div>
                <div className="skeleton h-6 w-4/6 md:w-full mb-2"></div>
                <div className="skeleton h-4 w-3/6 md:w-full"></div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <button
                  className="skeleton px-4 py-2 bg-gray-200 text-white rounded cursor-not-allowed"
                  disabled
                >
                  Carregando...
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProductCard({ items }: Products) {
  return (
    <>
      {items &&
        items.map((item, index) => (
          <li
            key={index}
            className="flex flex-row max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4 col-span-1"
          >
            <figure className="w-1/3">
              <img
                className="object-cover w-full h-full"
                src={item.image?.[0].url}
                alt={item.alternateName}
              />
            </figure>
            <div className="flex flex-col justify-between p-4 w-2/3">
              <div>
                <h2 className="text-gray-800 text-xl font-semibold">
                  {item.name}
                </h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <a
                  href={item.url}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  Comprar
                </a>
                <Votes productId={item.productID} />
              </div>
            </div>
          </li>
        ))}
    </>
  );
}
