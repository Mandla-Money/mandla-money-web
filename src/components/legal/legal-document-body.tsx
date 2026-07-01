import Link from "next/link";

function renderBlock(block: string, index: number) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const isHeading = /^\d+\.\s/.test(block);
  const isListItem = block.startsWith("•");

  if (isHeading) {
    return (
      <h2
        key={index}
        className="mt-8 text-lg font-semibold text-primary first:mt-0 md:text-xl"
      >
        {block}
      </h2>
    );
  }

  if (block.startsWith("Effective Date:")) {
    return (
      <p key={index} className="text-sm font-medium text-accent">
        {block}
      </p>
    );
  }

  const parts = block.split(urlPattern);
  const content = parts.map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={`${index}-${i}`}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary underline decoration-accent/50 underline-offset-2 hover:text-accent"
      >
        {part}
      </a>
    ) : (
      part
    )
  );

  if (isListItem) {
    return (
      <p key={index} className="text-sm leading-relaxed text-primary/70 md:text-base">
        {content}
      </p>
    );
  }

  return (
    <p key={index} className="text-sm leading-relaxed text-primary/70 md:text-base">
      {content}
    </p>
  );
}

export function LegalDocumentBody({
  title,
  blocks,
  pdfHref,
}: {
  title: string;
  blocks: string[];
  pdfHref?: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Legal
      </p>
      <h1 className="mt-3 text-3xl font-bold text-primary md:text-5xl">{title}</h1>

      <div className="mt-8 space-y-4">{blocks.map(renderBlock)}</div>

      {pdfHref && (
        <p className="mt-10 border-t border-primary/10 pt-6 text-sm text-primary/50">
          Prefer PDF?{" "}
          <Link
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:text-accent"
          >
            Download PDF version
          </Link>
        </p>
      )}
    </article>
  );
}
