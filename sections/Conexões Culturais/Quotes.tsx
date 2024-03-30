import { Quotes } from "../../loaders/Quotes/zenquotes.ts";

export interface Props {
  quote?: Quotes;
}

export default function Blockquotes(props: Props) {
  return (
    <>
      {props.quote &&
        (
          <blockquote className="border-l-4 border-gray-700 p-4 my-4">
            <p className="text-gray-900">{props.quote.data}</p>
          </blockquote>
        )}
    </>
  );
}
