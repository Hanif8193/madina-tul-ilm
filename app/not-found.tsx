import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-cream-200 px-4 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-serif text-7xl font-bold text-emerald-800 sm:text-8xl">404</p>
        <h1 className="mt-4 font-serif text-3xl font-bold text-emerald-950">
          Page Not Found
        </h1>
        <p className="mt-4 text-ink-700">
          The page you are looking for does not exist or has been moved. Let us help
          you find your way back.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Link
            href="/contact"
            className="text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline"
          >
            Contact us for help
          </Link>
        </div>
      </div>
    </section>
  );
}