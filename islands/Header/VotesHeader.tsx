import Icon from "deco-sites/andercamps/components/ui/Icon.tsx";
import { invoke } from "deco-sites/andercamps/runtime.ts";
import { useEffect, useState } from "preact/hooks";

interface Props {
  totalVotes?: number;
}

export default function VotesHeader({ totalVotes }: Props) {
  const [votes, setVotes] = useState<number>(totalVotes ?? 0);

  const updateVotes = async () => {
    const { total } = await invoke["deco-sites/andercamps"].loaders
      .totalVotes();
    setVotes(() => total);
  };

  useEffect(() => {
    const intervalId = setInterval(updateVotes, 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <Icon id="Friends" size={32} />
        <span id="total">{votes}</span>
      </div>
    </>
  );
}
