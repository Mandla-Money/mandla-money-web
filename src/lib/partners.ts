export type Partner = {
  name: string;
  logo: string;
  url: string;
};

export const partners: Partner[] = [
  {
    name: "XRPL Commons",
    logo: "/visuals/xrpl-commons.png",
    url: "https://www.xrpl-commons.org/",
  },
  { name: "Ripple", logo: "/visuals/ripple.png", url: "https://ripple.com" },
  { name: "ZARP", logo: "/visuals/zarp.svg", url: "https://zarp.cash/" },
  {
    name: "MoneyGram",
    logo: "/visuals/moneygram.png",
    url: "https://www.moneygram.com/",
  },
  { name: "Algorand", logo: "/visuals/algorand.png", url: "https://algorand.co" },
  { name: "Tenity", logo: "/visuals/tenity.png", url: "https://tenity.com" },
  { name: "CSIR", logo: "/visuals/csir.jpg", url: "https://www.csir.co.za" },
  { name: "RLabs", logo: "/visuals/rlabs.png", url: "https://rlabs.org" },
];
