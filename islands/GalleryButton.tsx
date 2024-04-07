import { Props } from "deco-sites/andercamps/sections/Conex%C3%B5es%20Culturais/PartialImageGallery.tsx";
import { useSignal } from "@preact/signals";
import Image from "apps/website/components/Image.tsx";

export default function PartialGalleryButton({ images }: Props) {
  const count = useSignal(3);

  function handleGallery() {
    count.value += 3;
  }

  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
        {images &&
          images.slice(0, count.value).map((image, index) => (
            <Image key={index} src={image} width={300} height={300} />
          ))}
      </div>

      {images && images.length > count.value &&
        <button onClick={handleGallery}>mostrar mais</button>}
    </>
  );
}
