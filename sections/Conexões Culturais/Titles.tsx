export interface Props {
  text: string;
}

export default function Titles({ text }: Props) {
  return (
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold transition duration-500 ease-in-out transform hover:scale-110 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        {text}
      </h1>
    </div>
  );
}
