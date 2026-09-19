import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import HistoryTimeline from "@/components/about/HistoryTimeline";
import VisionMission from "@/components/about/VisionMission";
import Leadership from "@/components/about/Leadership";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Madina-Tul-Ilm Islamic College — our story, vision, mission and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <HistoryTimeline />
      <VisionMission />
      <Leadership />
    </>
  );
}