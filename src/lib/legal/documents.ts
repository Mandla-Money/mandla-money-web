export type LegalSlug =
  | "terms-of-use"
  | "privacy-policy"
  | "risk-disclosure"
  | "complaints-policy";

export type LegalDocumentMeta = {
  slug: LegalSlug;
  title: string;
  label: string;
};

export const legalDocuments: LegalDocumentMeta[] = [
  { slug: "terms-of-use", title: "Terms of Use", label: "Terms of Use" },
  { slug: "privacy-policy", title: "Privacy Policy", label: "Privacy Policy" },
  { slug: "risk-disclosure", title: "Risk Disclosure", label: "Risk Disclosure" },
  {
    slug: "complaints-policy",
    title: "Complaints Policy",
    label: "Complaints Policy",
  },
];

export function getLegalDocument(slug: string) {
  return legalDocuments.find((doc) => doc.slug === slug);
}
