import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import weather from "apps/weather/loaders/temperature.ts";

// Definindo regiões e suas latitudes e longitudes correspondentes
const regionCoordinates: { [key: string]: { lat: number; long: number } } = {
  /* Brasil */
  "São Paulo": { lat: -23.5505, long: -46.6333 },
  "Rio de Janeiro": { lat: -22.9068, long: -43.1729 },
  "Minas Gerais": { lat: -19.9167, long: -43.9345 },
  "Bahia": { lat: -12.9714, long: -38.5014 },
  "Paraná": { lat: -25.4284, long: -49.2733 },
  "Rio Grande do Sul": { lat: -30.0346, long: -51.2177 },
  "Pernambuco": { lat: -8.0476, long: -34.8770 },
  "Ceará": { lat: -3.7172, long: -38.5433 },
  "Pará": { lat: -1.4558, long: -48.4902 },
  "Santa Catarina": { lat: -27.5954, long: -48.5480 },
  "Maranhão": { lat: -2.5290, long: -44.3020 },
  "Goiás": { lat: -16.6864, long: -49.2643 },
  "Amazonas": { lat: -3.4168, long: -65.8561 },
  "Espírito Santo": { lat: -20.3155, long: -40.3128 },
  "Paraíba": { lat: -7.1219, long: -36.7237 },
  "Rio Grande do Norte": { lat: -5.7945, long: -35.2110 },
  "Mato Grosso": { lat: -15.5989, long: -56.0949 },
  "Alagoas": { lat: -9.6662, long: -35.7357 },
  "Piauí": { lat: -5.0909, long: -42.8035 },
  "Distrito Federal": { lat: -15.8267, long: -47.9218 },
  "Mato Grosso do Sul": { lat: -20.4428, long: -54.6468 },
  "Sergipe": { lat: -10.9472, long: -37.0731 },
  "Rondônia": { lat: -11.5057, long: -63.5806 },
  "Tocantins": { lat: -10.2486, long: -48.3243 },
  "Acre": { lat: -9.0479, long: -70.5265 },
  "Roraima": { lat: 2.8197, long: -60.6715 },
  "Amapá": { lat: 0.0349, long: -51.0665 },

  /* Japão */
  "Tokyo": { lat: 35.6895, long: 139.6917 },
  "Osaka": { lat: 34.6937, long: 135.5023 },
  "Hokkaido": { lat: 43.2203, long: 142.7770 },
  "Kyoto": { lat: 35.0116, long: 135.7681 },
  "Fukuoka": { lat: 33.5904, long: 130.4017 },
  "Aichi": { lat: 35.1802, long: 136.9066 },
  /* {...} */

  /* Canadá */
  "Quebec": { lat: 52.9399, long: -73.5491 },
  "Alberta": { lat: 53.9333, long: -116.5765 },
  "Manitoba": { lat: 53.7609, long: -98.8139 },
  "Saskatchewan": { lat: 52.9399, long: -106.4509 },
  /* {...} */
};

interface Props {
  /**
   * @format html
   */
  title: string;
  description: string;
  image?: ImageWidget;
  placement: "left" | "right";

  /** @title Estado */
  /** @description Coloque o estado de onde você deseja obter a temperatura */
  region?: string;

  /** @title Indicador de Localidade */
  /** @description Coloque a latitude e longitude da região desejada (Opcional) */
  latLong?: { lat?: number; long?: number };

  /** @hide temperature */
  temperature?: { celsius: number };
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export const loader = async (props: Props, _req: Request) => {
  let temperature = null;
  // Se a região for especificada e existir nas coordenadas definidas, usamos essas coordenadas
  const latLong = props.region && regionCoordinates[props.region]
    ? regionCoordinates[props.region]
    // Caso contrário, usamos as coordenadas fornecidas ou padrão (0, 0) se não houverem coordenadas
    : props.latLong ?? { lat: 0, long: 0 };

  temperature = await weather(latLong, _req);
  return { ...props, temperature };
};

const TemperatureHero = ({
  temperature,
  region,
  title,
  description,
  image,
  placement,
}: Props) => {
  let classTemperature;
  let temperatureMessage;

  if (temperature && temperature.celsius !== null) {
    if (temperature.celsius < 15) { // Frio 🥶
      classTemperature = "bg-blue-500 hover:bg-blue-600";
    } else if (temperature.celsius > 30) { // Quente 🥵
      classTemperature = "bg-red-500 hover:bg-red-600";
    } else { // Temperatura Normal;
      classTemperature = "bg-green-500 hover:bg-green-600";
    }
  }
  // Mensagem para temperatura
  region
    ? temperatureMessage = `${region}: Está fazendo ${temperature?.celsius}º`
    : temperatureMessage = `Está fazendo ${temperature?.celsius}º`;

  return (
    <div>
      <div class="mx-auto flex flex-col items-center gap-8">
        <div
          class={`flex lg:w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
            image
              ? PLACEMENT[placement]
              : "flex-col items-center justify-center text-center"
          } lg:py-36 gap-5 lg:p-3 items-center`}
        >
          {image && (
            <Image
              width={640}
              class="w-full lg:w-1/2 object-fit rounded-lg"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )}
          <div
            class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${
              image
                ? "lg:w-1/2 lg:max-w-xl"
                : "flex flex-col items-center justify-center lg:max-w-3xl"
            }`}
          >
            <div
              class="inline-block text-[80px] leading-[100%] font-medium tracking-[-2.4px]"
              dangerouslySetInnerHTML={{ __html: title }}
            >
            </div>
            <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
              {description}
            </p>
            <button
              className={`rounded-full p-2 text-white transition-transform duration-300 transform hover:-translate-y-1 ${classTemperature}`}
            >
              {temperatureMessage}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureHero;
