import { ImageWidget } from "apps/admin/widgets.ts";
import PartialGalleryButton from "../../islands/GalleryButton.tsx";

export interface Props {
  /**
   * @minItems 3
   */
  images?: ImageWidget[];
}

export default function PartialImageGallery({ images }: Props) {
  if (!images || !images.length) images = [];
  images = images.filter((i) => typeof i === "string");

  // Verificar se o número de imagens é menor que 3
  if (images && images.length < 3) {
    const placeholders = 3 - images.length;
    for (let i = 0; i < placeholders; i++) {
      images.push(`https://fakeimg.pl/300x300`);
    }
  }

  return (
    <div class="container mx-auto py-20 ">
      <PartialGalleryButton images={images} />
    </div>
  );
}
