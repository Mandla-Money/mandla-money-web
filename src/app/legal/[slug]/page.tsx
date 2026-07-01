import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { LegalDocumentBody } from "@/components/legal/legal-document-body";
import content from "@/lib/legal/content.json";
import { getLegalDocument, legalDocuments } from "@/lib/legal/documents";

const pdfBySlug: Record<string, string> = {
  "terms-of-use": "/documents/Terms%20of%20Use.pdf",
  "privacy-policy": "/documents/Privacy%20Policy.pdf",
  "risk-disclosure": "/documents/Risk%20Disclosure.pdf",
  "complaints-policy": "/documents/Complaints%20Policy.pdf",
};

export function generateStaticParams() {
  return legalDocuments.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getLegalDocument(slug);
  if (!meta) return {};

  return {
    title: `Mandla Money — ${meta.title}`,
    description: `${meta.title} for Mandla Money (Pty) Ltd.`,
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getLegalDocument(slug);
  const doc = content[slug as keyof typeof content];

  if (!meta || !doc) {
    notFound();
  }

  return (
    <>
      <section className="border-b border-primary/10 bg-off-white pt-20 pb-8">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-primary/50 transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </section>
      <LegalDocumentBody
        title={doc.title}
        blocks={doc.blocks}
        pdfHref={pdfBySlug[slug]}
      />
    </>
  );
}
