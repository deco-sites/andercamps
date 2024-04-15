import { MatchContext } from "deco/blocks/matcher.ts";

export interface Props {
  platform:
    | "Android"
    | "Chrome OS"
    | "Chromium OS"
    | "iOS"
    | "Linux"
    | "macOS"
    | "Windows"
    | "Unknown";
}

/**
 * @title Plataforma
 * @description Verifica a plataforma do usuário. ex: "Android", "iOS"
 * @icon code
 */
export default function Platform(props: Props, ctx: MatchContext) {
  return ctx.request.headers.get("sec-ch-ua-platform")?.includes(
    props.platform,
  ) ?? false;
}

/**
 * "Sec-CH-UA" é uma abreviação de "Client Hints User Agent".
 *  Um conjunto de recursos que permitem que os navegadores enviem informações aos servidores, para que eles identifiquem e forneçam conteúdo otimizado com base nas características do dispositivo do usuário.
 * [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA]
 */
