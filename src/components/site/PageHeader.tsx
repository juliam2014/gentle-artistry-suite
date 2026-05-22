interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="pt-40 pb-16 md:pt-48 md:pb-24 px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto animate-fade-up">
        {eyebrow && <span className="eyebrow block mb-6">{eyebrow}</span>}
        <h1 className="font-serif font-light text-5xl md:text-7xl leading-[1.05] text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-8 text-lg text-foreground/65 font-light max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
