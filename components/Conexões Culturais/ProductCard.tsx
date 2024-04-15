import { Products } from "deco-sites/andercamps/sections/Conexões Culturais/HorizontalProductCard.tsx";
import Votes from "deco-sites/andercamps/islands/votes.tsx";
import Image from "apps/website/components/Image.tsx";

export default function ProductCard({ items }: Products) {
  console.log(items);

  return (
    <>
      {items &&
        items.map((item, index) => (
          <li
            key={index}
            className="flex flex-row w-full bg-white shadow-md rounded-lg overflow-hidden"
          >
            <figure className="w-1/3">
              <Image
                width={305}
                height={305}
                className="object-cover w-full h-full"
                sizes="(max-width: 305px) 100vw"
                src={item.image?.[0].url ?? ""}
                alt={item.alternateName}
                decoding="async"
                loading="lazy"
              />
            </figure>
            <div className="flex flex-col justify-between p-4 w-2/3">
              <div>
                <h2 className="text-gray-800 text-xl font-semibold line-clamp-2">
                  {item.name}
                </h2>
                <p className="mt-2 text-gray-600 line-clamp-2">
                  {item.description}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <a
                  href={item.url}
                  className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded"
                >
                  Detalhes
                </a>
                <Votes productId={item.productID} />
              </div>
            </div>
          </li>
        ))}
    </>
  );
}
