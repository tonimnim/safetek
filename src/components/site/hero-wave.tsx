function buildWavePath(
  width: number,
  height: number,
  ampBase: number,
  periods: number,
  yOffset = 0,
  ampVariance = 0,
) {
  const period = width / periods;
  const half = period / 2;
  const cy = height / 2 + yOffset;
  const halfWidth = width / 2;
  const cmds: string[] = [`M 0 ${cy}`];

  for (let i = 0; i < periods * 2; i++) {
    const direction = i % 2 === 0 ? -1 : 1;
    const startX = i * half;
    const endX = (i + 1) * half;
    const phase = (startX / halfWidth) * Math.PI * 2;
    const envelope =
      0.65 * Math.sin(phase) + 0.35 * Math.sin(phase * 2 + 1.1);
    const amp = ampBase * (1 + ampVariance * envelope);
    const peakY = cy + direction * amp;
    const cp1X = startX + half * 0.5;
    const cp2X = endX - half * 0.5;
    cmds.push(`C ${cp1X} ${peakY} ${cp2X} ${peakY} ${endX} ${cy}`);
  }
  return cmds.join(" ");
}

export function HeroWave() {
  const W = 2400;
  const H = 600;
  const wave1 = buildWavePath(W, H, 70, 2, 60, 0.45);
  const wave2 = buildWavePath(W, H, 50, 3, -20, 0.55);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 top-1/4 overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to top, black 55%, rgba(0,0,0,0.6) 80%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to top, black 55%, rgba(0,0,0,0.6) 80%, transparent 100%)",
      }}
    >
      <svg
        className="animate-wave-flow absolute left-0 top-0 h-full w-[200%]"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="hero-wave-a" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="rgba(232,90,39,0)" />
            <stop offset="30%" stopColor="rgba(232,90,39,0.55)" />
            <stop offset="70%" stopColor="rgba(255,136,0,0.55)" />
            <stop offset="100%" stopColor="rgba(232,90,39,0)" />
          </linearGradient>
          <linearGradient id="hero-wave-b" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="rgba(255,136,0,0)" />
            <stop offset="50%" stopColor="rgba(255,180,90,0.45)" />
            <stop offset="100%" stopColor="rgba(255,136,0,0)" />
          </linearGradient>
        </defs>

        <g className="animate-wave-bob-a will-change-transform">
          <path
            d={wave1}
            stroke="url(#hero-wave-a)"
            strokeWidth="1.5"
            strokeDasharray="1 7"
            strokeLinecap="round"
            opacity="0.55"
          />
        </g>

        <g className="animate-wave-bob-b will-change-transform">
          <path
            d={wave2}
            stroke="url(#hero-wave-b)"
            strokeWidth="2"
            strokeDasharray="1 9"
            strokeLinecap="round"
            opacity="0.4"
          />
        </g>
      </svg>
    </div>
  );
}
