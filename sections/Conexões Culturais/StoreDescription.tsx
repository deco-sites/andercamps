export interface ListItem {
  título: string;
  text: string;
}

export interface Props {
  title: string;
  description?: string;
  items?: ListItem[];
}

export default function CupomList(props: Props) {
  return (
    <div class="container mx-auto">
      <div class="flex flex-col gap-4 py-4">
        <h2 class="text-2xl font-semibold">{props.title}</h2>
        {props.description && (
          <p class="text-[16px] md:text-[18px] leading-[150%]">
            {props.description}
          </p>
        )}
        <ul class="flex flex-col lg:flex-row justify-center gap-4">
          {props.items &&
            props.items.map((item, index) => (
              <li class="bg-stone-50 rounded-3xl p-8" key={index}>
                <h3 class="text-xl font-semibold mb-4">{item.título}</h3>
                <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
                  {item.text}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
