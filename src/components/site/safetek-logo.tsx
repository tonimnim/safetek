type Variant = "light" | "dark";

export function SafetekLogo({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: Variant;
}) {
  const accent = variant === "dark" ? "#8a3520" : "#5d1909";
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden
    >
      <polygon points="3,0 97,0 50,47" fill="#ed5d1d" />
      <polygon points="100,3 100,97 53,50" fill={accent} />
      <polygon points="3,100 97,100 50,53" fill="#ed5d1d" />
      <polygon points="0,3 47,50 0,97" fill="#ed5d1d" />
    </svg>
  );
}
