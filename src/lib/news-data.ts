export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  excerpt: string;
  paragraphs: string[];
  externalLinks?: Array<{ label: string; href: string }>;
  detailImagePlacement?: "side" | "inline";
  sourceUrl?: string;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "reimagining-mobile-money-via-stablecoins-and-whatsapp",
    title: "Reimagining mobile money via stablecoins and WhatsApp",
    date: "October 08, 2025",
    image: "/articles/uct.png",
    imageWidth: 1506,
    imageHeight: 988,
    excerpt:
      "After a successful trip to Singapore this year, University of Cape Town (UCT) student Julian Kanjere is excited about the potential of stablecoins to advance financial inclusion.",
    paragraphs: [
      "After a successful trip to Singapore this year, University of Cape Town (UCT) student Julian Kanjere is excited about the potential of stablecoins to advance financial inclusion.",
    ],
    sourceUrl:
      "https://www.news.uct.ac.za/article/-2025-10-08-reimagining-mobile-money-via-stablecoins-and-whatsapp",
    externalLinks: [
      {
        label: "Read source article on UCT News",
        href: "https://www.news.uct.ac.za/article/-2025-10-08-reimagining-mobile-money-via-stablecoins-and-whatsapp",
      },
    ],
  },
  {
    slug: "apex-developer-conference-las-vegas",
    title: "Mandla Money at Apex Developer Conference in Las Vegas",
    date: "December 15, 2022",
    image: "/articles/apex.png",
    imageWidth: 1024,
    imageHeight: 265,
    excerpt:
      "At Apex Developer Summit, Mandla Money showcased transacting in low-tech environments using SMS wallets.",
    paragraphs: [
      "The 2022 edition of the Apex Developer Summit took place in Las Vegas between 6 and 8 September 2022. Hosted by Ripple and the XRPL Foundation, the event is the premier XRPL developer conference bringing together enthusiasts, developers, and innovators.",
      "At the event, Julian Kanjere delivered a talk titled 'Transacting in Low-Tech Environments' and showcased how the Mandla Money SMS Wallet enables financial inclusion by allowing transfer of value in environments without reliable internet and smartphones.",
      "As blockchain-based wallets and payment solutions expand, there is an opportunity to build with low-tech users in mind from the start. According to the World Bank, there are still around 2 billion unbanked adults globally.",
      "Mandla Money combines accessible mobile devices, blockchain rails, and robust SMS infrastructure to deliver a practical solution for emerging markets. By leveraging XRP Ledger, the wallet offers low fees, fast settlement, and access to XRPL-issued digital assets.",
    ],
    detailImagePlacement: "inline",
  },
  {
    slug: "xrpl-real-world-impact-hackathon-win",
    title: "Mandla Money wins XRPL Creating Real World Impact Hackathon",
    date: "December 14, 2022",
    image: "/articles/xrpl.png",
    imageWidth: 300,
    imageHeight: 300,
    excerpt:
      "Mandla Money won Best Social Justice Use Case in Ripple's XRPL hackathon for its SMS wallet.",
    paragraphs: [
      "In July 2022, Mandla Money participated in the XRPL Creating Real World Impact Hackathon hosted by Ripple. Competing against hundreds of teams, Mandla Money won the Best Social Justice Use Case category.",
      "The hackathon brought together over 300 participants from more than 20 countries and focused on building real-world apps using XRPL SDKs and APIs. Categories included Social Justice, Economic, and Sustainability use cases.",
      "Mandla Wallet allows users to receive, transact, and store value through SMS, without requiring smartphones or internet. The team highlighted its potential to improve financial inclusion, reduce remittance friction, and enable transparent low-cost bulk aid distribution.",
      "The Mandla Money team expressed gratitude to Ripple and the broader XRPL community for the recognition and support.",
    ],
  },
  {
    slug: "ripple-impact-award-london",
    title: "Ripple Impact Award for Mandla Money in London",
    date: "December 14, 2020",
    image: "/articles/ripple_award.png",
    imageWidth: 415,
    imageHeight: 562,
    excerpt:
      "Mandla Money received a UBRI Impact Award in London for advancing financial inclusion with XRPL.",
    paragraphs: [
      "Julian Kanjere from Mandla Money received an impact award at Ripple Impact's University Blockchain Research Initiative (UBRI) Connect event hosted by the UCL School of Management in London.",
      "Ripple's UBRI supports students and faculty through strategic guidance, technical resources, and funding to advance blockchain education globally. UBRI Connect brings scholars, researchers, and leaders together to share initiatives and research.",
      "At the event, the UBRI Impact Award was jointly awarded to Julian Kanjere and Titose Chembezi. Mandla Wallet, built on XRP Ledger, was recognized for enabling users to receive, transact, and store value via SMS without smartphones or internet access.",
      "The team also acknowledged support from the University of Cape Town Financial Innovation Hub and thanked UBRI and UCL School of Management for championing blockchain innovation in academia.",
    ],
    externalLinks: [
      {
        label: "Watch UBRI Connect 2022 Awards and Closing Remarks",
        href: "https://www.youtube.com/watch?v=QZO-NXqYNi4",
      },
    ],
  },
  {
    slug: "xrpl-grant-financial-inclusion",
    title: "Mandla Money awarded XRPL Grant to Advance Financial Inclusion",
    date: "January 2022",
    image: "/articles/grant.png",
    imageWidth: 642,
    imageHeight: 341,
    excerpt:
      "Mandla Money received an XRPL grant to expand and harden its SMS wallet for emerging markets.",
    paragraphs: [
      "Mandla Money was awarded an XRPL grant from Ripple to further develop its SMS wallet powered by XRP Ledger. The grant supports the mission to deliver low-cost, easy-to-use digital financial services to underbanked communities.",
      "The funding enables key milestones, including security enhancements and integration with the XRPL DEX, with the goal of launching pilots across multiple regions.",
      "This grant marks a major step in scaling practical financial access for people who are often excluded from traditional banking systems.",
    ],
    externalLinks: [
      {
        label: "View official grant announcement",
        href: "https://xrplgrants.org/awardees?wave=4",
      },
    ],
  },
];

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
