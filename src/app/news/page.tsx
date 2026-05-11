import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { basePath } from "@/lib/base-path";
import { newsArticles } from "@/lib/news-data";

export const metadata = {
  title: "Mandla Money — In the News",
  description: "Read full Mandla Money news and announcements.",
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-primary pt-20 pb-12">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            In the News
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
            Mandla Money Newsroom
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/60">
            Full updates, awards, and milestones from Mandla Money.
          </p>
        </div>
      </section>

      <section className="bg-off-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          {newsArticles.map((article, index) => (
            <article
              key={article.slug}
              className="grid gap-6 border-b border-primary/10 py-10 last:border-b-0 md:grid-cols-[1fr_240px] md:items-center"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {article.date}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-primary">
                  {article.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-primary/60 md:text-base">
                  {article.excerpt}
                </p>
                <Link
                  href={article.sourceUrl ?? `/news/${article.slug}`}
                  target={article.sourceUrl ? "_blank" : undefined}
                  rel={article.sourceUrl ? "noopener noreferrer" : undefined}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
                >
                  {article.sourceUrl ? "Read source article" : "Read full article"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="rounded-xl bg-white p-2">
                  <Image
                    src={`${basePath}${article.image}`}
                    alt={article.title}
                    width={article.imageWidth}
                    height={article.imageHeight}
                    className="h-auto w-full rounded-lg"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
