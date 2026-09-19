import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryTiles from "@/components/GalleryTiles";
import { GALLERY_NOTE, GALLERY_TILES } from "@/lib/data";
import { sectionPadding, wrap } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A glimpse of life at Madina-Tul-Ilm Islamic College — campus life, mehfils, competitions, celebrations and institutional moments.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Life at Madina-Tul-Ilm"
        description="A glimpse of campus life, mehfils, competitions, celebrations and institutional moments."
      />
      <section className={`bg-beige ${sectionPadding}`}>
        <div className={wrap}>
          <GalleryTiles tiles={GALLERY_TILES} />
          <p className="mt-5 text-[13.5px] text-muted">{GALLERY_NOTE}</p>
        </div>
      </section>
    </>
  );
}