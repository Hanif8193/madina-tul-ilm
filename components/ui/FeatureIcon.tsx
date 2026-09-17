import type { SVGProps } from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  BuildingIcon,
  GlobeIcon,
  HeartIcon,
  HistoryIcon,
  ScrollIcon,
  ShieldIcon,
  SproutIcon,
  UsersIcon,
} from "./icons";

const iconMap = {
  quran: BookOpenIcon,
  academic: AcademicCapIcon,
  character: HeartIcon,
  community: UsersIcon,
  campus: BuildingIcon,
  global: GlobeIcon,
  scroll: ScrollIcon,
  history: HistoryIcon,
  shield: ShieldIcon,
  sprout: SproutIcon,
} as const;

export type IconName = keyof typeof iconMap;

interface FeatureIconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export function FeatureIcon({ name, ...props }: FeatureIconProps) {
  const Icon = iconMap[name as IconName] ?? BookOpenIcon;
  return <Icon {...props} />;
}