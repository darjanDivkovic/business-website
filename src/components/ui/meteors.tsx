import { cn } from "@/lib/utils";

export function Meteors({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect pointer-events-none absolute top-1/2 left-1/2 h-px w-px rounded-full bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-px before:bg-gradient-to-r before:from-white before:to-transparent",
            className,
          )}
          style={{
            top: Math.floor(Math.random() * 100) + "%",
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        />
      ))}
    </>
  );
}
