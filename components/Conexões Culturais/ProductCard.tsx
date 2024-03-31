import Image from "apps/website/components/Image.tsx";
import { Card } from "deco-sites/andercamps/sections/Conexões Culturais/HorizontalProductCard.tsx";

export default function ProductCard(props: { item: Card }) {
  const { nome, description, price, image } = props.item;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden md:flex">
      <div className="md:w-1/3">
        {image
          ? (
            <Image
              width={640}
              className="object-cover w-full h-full"
              sizes="(max-width: 350px)"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )
          : (
            <img
              className="object-cover w-full h-full"
              src="https://via.placeholder.com/300x200"
              alt="Product Image"
            />
          )}
      </div>
      <div className="md:w-2/3 p-4">
        <h2 className="text-gray-800 text-2xl font-semibold">{nome}</h2>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
        <div className="mt-3 flex items-center justify-between">
          {price && <span className="text-gray-800 font-bold">R$: {price}
          </span>}
          <button
            className={`px-4 py-2 ${
              price
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-300 cursor-not-allowed"
            } text-white rounded`}
          >
            {price ? "Comprar" : "Indisponível"}
          </button>
        </div>
      </div>
    </div>
  );
}
