import Image from "next/image";

type ImagePlaceholderProps = {
  className?: string;
  tone?: "green" | "ivory";
  label?: string;
  subLabel?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
};

function ArchPattern({ tone }: { tone: "green" | "ivory" }) {
  const stroke = "#D6B45C";
  const arcOpacity = tone === "green" ? 0.5 : 0.75;
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 200 220"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke={stroke} strokeWidth="0.7" fill="none">
        <path d="M60 200 V140 C60 100 82 70 100 70 C118 70 140 100 140 140 V200" opacity={arcOpacity} />
        <path d="M78 200 V145 C78 118 88 98 100 98 C112 98 122 118 122 145 V200" opacity={arcOpacity} />
        <circle cx="100" cy="46" r="8" opacity={arcOpacity} />
      </g>
      <circle cx="100" cy="100" r="96" fill="none" stroke={stroke} strokeWidth="0.5" opacity="0.18" />
      <circle cx="100" cy="100" r="70" fill="none" stroke={stroke} strokeWidth="0.5" opacity="0.18" />
      <circle cx="100" cy="100" r="44" fill="none" stroke={stroke} strokeWidth="0.5" opacity="0.18" />
    </svg>
  );
}

export default function ImagePlaceholder({
  className = "",
  tone = "green",
  label = "Institutional Photography",
  subLabel = "[Placeholder — replace with actual photograph]",
  src,
  alt = "",
  priority = false,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt || label}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }

  const isGreen = tone === "green";

  return (
    <div
      className={`relative flex flex-col items-center justify-end overflow-hidden text-center ${
        isGreen
          ? "bg-gradient-to-br from-green to-green-dark"
          : "bg-ivory border border-[var(--line)]"
      } ${className}`}
    >
      <ArchPattern tone={tone} />
      <div className="relative mx-auto flex flex-col items-center gap-1 px-4 py-10">
        <span
          className={`font-display text-lg font-semibold ${
            isGreen ? "text-ivory/90" : "text-green"
          }`}
        >
          {label}
        </span>
        <span
          className={`text-[11.5px] font-semibold tracking-wide ${
            isGreen ? "text-ivory/50" : "text-muted"
          }`}
        >
          {subLabel}
        </span>
      </div>
    </div>
  );
}