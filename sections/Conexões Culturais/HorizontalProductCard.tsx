import type { ImageWidget } from "apps/admin/widgets.ts";
import ProductCard from "deco-sites/andercamps/components/Conexões Culturais/ProductCard.tsx";

/**
 * @title {{nome}}
 */
export interface Card {
  nome: string;
  description?: string;
  price?: number;
  image?: ImageWidget;
}

export interface Props {
  items?: Card[];
}

export default function HorizontalProductCard(props: Props) {
  return (
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {props.items &&
        props.items.map((item, index) => (
          <ProductCard
            key={index}
            item={item}
          />
        ))}
    </div>
  );
}
