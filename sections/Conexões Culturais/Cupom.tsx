export interface ListItem {
    text: string;
    beneficios: string;
    validade?: string;
    ativo?: boolean;
}

export interface Props {
    title: string;
    description?: string;
    items?: ListItem[];
}

export default function CupomList(props: Props) {
    return <div class="bg-neutral">
        <div class="xl:container flex flex-col gap-4 p-4">
            <h2 class="text-2xl font-semibold" >{props.title}</h2>
            {props.description && <p class="text-[16px] md:text-[18px] leading-[150%]">{props.description}</p>}
            <ul class="flex overflow-auto -mx-4 pl-4 gap-3">
                { props.items && props.items.map((item, index) => (
                    item.ativo? 
                    <li class="border-black border-dashed border-2 rounded-md p-2 min-w-[12rem]" key={index}>
                        <div>
                            <p class="text-xl">{item.text}</p>
                            <p class="text-md">{item.beneficios}</p>
                        </div>
                        {item.validade && <p class="text-xs italic">Validade: <span>{item.validade}</span></p>}
                    </li>
                    : ''
                ))}
            </ul>
        </div>
    </div>
}