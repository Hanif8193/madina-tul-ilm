import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const src = variant === "light" ? "/images/logo-light.svg" : "/images/logo.svg";
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3", className)}
      aria-label={`${siteConfig.fullName} — Home`}
    >
      <Image
        src={src}
        alt={siteConfig.name}
        width={210}
        height={60}
        priority
        className="h-14 w-auto sm:h-16"
      />
    </Link>
  );
}