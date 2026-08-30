type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="font-heading inline-flex min-h-11 items-center bg-mbm-red px-4 text-xl font-bold uppercase text-white sm:px-6">
        {title}
      </h2>
      {(eyebrow || description) && (
        <div className="mt-4 max-w-3xl">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase text-mbm-red-deep">
              {eyebrow}
            </p>
          )}
          {description && <p className="text-base leading-7 text-mbm-muted">{description}</p>}
        </div>
      )}
    </div>
  );
}
