import { MatchContext } from "deco/blocks/matcher.ts";

export interface Props {
  campanha: string;
}

/**
 * @title Utm Campaign
 */
export default function UTMCampaign(props: Props, ctx: MatchContext) {
  const url = new URL(ctx.request.url);
  return url.searchParams.get("utmcampaign")?.includes(props.campanha) ?? false;
}
