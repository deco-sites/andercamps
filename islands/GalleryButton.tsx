import { Props } from "deco-sites/andercamps/sections/Conex%C3%B5es%20Culturais/PartialImageGallery.tsx";
import { useSignal } from "@preact/signals";

export default function PartialGalleryButton({ images }: Props) {
  const count = useSignal(3);

  function handleGallery() {
    count.value += 3;
  }

  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images &&
          images.slice(0, count.value).map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Imagem"
              class="w-full h-auto rounded-lg"
            />
          ))}
      </div>

      {images && images.length > count.value &&
        (
          <div class="flex justify-center items-center">
            <button
              onClick={handleGallery}
              class="rounded-full bg-secondary p-2 transition-transform duration-300 transform hover:translate-y-1"
            >
              Mostrar mais
            </button>
          </div>
        )}
    </>
  );
}
