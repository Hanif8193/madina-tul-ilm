import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos from the Madina Tul Ilm campus, classrooms, Quran hall, events and graduation ceremonies.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumb="Gallery"
        title="Photo Gallery"
        subtitle="A glimpse into campus life, learning and celebrations at Madina Tul Ilm."
      />
      <section className="bg-cream-200 py-24">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
      <CtaBanner
        title="See Us in Person"
        description="Photos only tell part of the story. Visit our campus and experience the atmosphere for yourself."
      />
    </>
  );
}