import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { basePath } from "@/lib/base-path";
import { getNewsArticleBySlug, newsArticles } from "@/lib/news-data";

export function generateStaticParams() {
  return newsArticles
    .filter((article) => !article.sourceUrl)
    .map((article) => ({ slug: article.slug }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const useInlineImage = article.detailImagePlacement === "inline";

  return (
    <>
      <section className="bg-primary pt-20 pb-12">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            In the News
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {article.date}
          </p>
        </div>
      </section>

      <section className="bg-off-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <article
            className={
              useInlineImage ? "space-y-6" : "grid gap-8 md:grid-cols-[1fr_280px]"
            }
          >
            <div className="space-y-5 text-sm leading-relaxed text-primary/70 md:text-base">
              {article.paragraphs.map((paragraph, index) => (
                <div key={paragraph}>
                  <p>{paragraph}</p>
                  {((useInlineImage && index === 0) || (!useInlineImage && index === 1)) && (
                    <Image
                      src={`${basePath}${article.image}`}
                      alt={article.title}
                      width={article.imageWidth}
                      height={article.imageHeight}
                      className={`mt-5 w-full rounded-xl bg-white p-2 ${
                        useInlineImage ? "h-auto" : "h-auto md:hidden"
                      }`}
                    />
                  )}
                </div>
              ))}

              {article.externalLinks && article.externalLinks.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {article.externalLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {!useInlineImage && (
              <aside className="hidden md:block">
                <div className="sticky top-24 rounded-xl bg-white p-2">
                  <Image
                    src={`${basePath}${article.image}`}
                    alt={article.title}
                    width={article.imageWidth}
                    height={article.imageHeight}
                    className="h-auto w-full rounded-lg"
                  />
                </div>
              </aside>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
