import Icons from "deco-sites/andercamps/components/ui/Icon.tsx";
import { invoke } from "deco-sites/andercamps/runtime.ts";
import { useSignal } from "@preact/signals";

export interface Props {
  productId: string;
}

export default function Votes({ productId }: Props) {
  const voted = useSignal(false);
  const voteNumber = useSignal("0");

  function handleVotes() {
    invoke["deco-sites/andercamps"].actions.PostVotes({ productId })
      .then(({ product, total }) => {
        voteNumber.value = String(product);
        voted.value = !voted.value;
      });
  }

  invoke["deco-sites/andercamps"].loaders.productVotes({ productId })
    .then(({ product }) => {
      voteNumber.value = product;
    });

  return (
    <>
      <button
        className="flex items-center justify-between gap-3"
        onClick={handleVotes}
        disabled={voted.value}
      >
        {voted.value
          ? <Icons id="MoodCheck" size={32} />
          : <Icons id="MoodSmile" size={32} />}
        <span>{voteNumber}</span>
      </button>
    </>
  );
}
