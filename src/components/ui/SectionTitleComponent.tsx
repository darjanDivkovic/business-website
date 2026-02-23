const SectionTitleComponent = ({
  prefix,
  header,
  children,
  className = "",
}) => {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        {prefix}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
        {header}
      </h2>
      <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
        {children}
      </p>
    </div>
  );
};

export default SectionTitleComponent;
