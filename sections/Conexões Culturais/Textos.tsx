export interface Props {
  text: string;
}

export default function Textos({ text }: Props) {
  return (
    <div class="container mx-auto">
      <p>{text}</p>
    </div>
  );
}
