import Icons from "deco-sites/andercamps/components/ui/Icon.tsx";
import { invoke } from "deco-sites/andercamps/runtime.ts";
import { useSignal } from "@preact/signals";
import { toast } from "toastify";

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
        toast("Produto avaliado!");

        /* Atualizando Votes no Header */
        const voteElements = document.querySelectorAll(".total-votes");

        // Verifica se pelo menos um elemento foi encontrado com a classe "total-votes"
        if (voteElements && voteElements.length) {
          voteElements.forEach((vote) => {
            vote.textContent = String(total);
          });
        }
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
