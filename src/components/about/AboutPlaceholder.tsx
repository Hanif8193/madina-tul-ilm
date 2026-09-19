type AboutPlaceholderProps = {
  className?: string;
  label: string;
  subLabel: string;
  cornerSize?: number;
  cornerOffset?: number;
};

export default function AboutPlaceholder({
  className = "",
  label,
  subLabel,
  cornerSize = 32,
  cornerOffset = 20,
}: AboutPlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden border border-gold/[0.2] bg-green text-center ${className}`}
    >
      <span
        aria-hidden="true"
        style={{ width: cornerSize, height: cornerSize, top: cornerOffset, left: cornerOffset }}
        className="pointer-events-none absolute border-l border-t border-gold/30"
      />
      <span
        aria-hidden="true"
        style={{ width: cornerSize, height: cornerSize, bottom: cornerOffset, right: cornerOffset }}
        className="pointer-events-none absolute border-b border-r border-gold/30"
      />
      <div className="relative flex flex-col items-center px-4">
        <span className="px-4 text-[10px] font-bold uppercase leading-[1.8] tracking-[0.18em] text-gold/50">
          {label}
        </span>
        <span className="px-4 text-[10px] font-normal uppercase leading-[1.8] tracking-[0.18em] text-gold/35">
          {subLabel}
        </span>
      </div>
    </div>
  );
}