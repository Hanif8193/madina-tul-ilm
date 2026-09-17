import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.7,
    stroke: "currentColor",
    "aria-hidden": true,
    ...props,
  } as const;
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-5-5m5 5l-5 5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  );
}

export function BookOpenIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
}

export function AcademicCapIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 21V7.5a2.25 2.25 0 012.25-2.25h10.5A2.25 2.25 0 0119.5 7.5V21m-12-9.75h3.75m-3.75 4.5h3.75m7.5-4.5h-3.75m3.75 4.5h-3.75M12 3.75v.75"
      />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-9.463-8.954c.077-.161.117-.334.117-.53m0 0a1.18.18 0 000-.696.875.875 0 00-1.67-.045A11.954 11.954 0 015.092 8.06m9.463 8.954a8.959 8.959 0 01-.284-2.253c0-.458.032-.91.094-1.352"
      />
    </svg>
  );
}

export function ScrollIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}

export function HistoryIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

export function SproutIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.51 11.28a5.478 5.478 0 00-1.384-.575c-2.083-.595-4.02-.204-5.411-2.06C7.764 6.558 8.673 4.89 8.673 4.89s2.118.918 3.205 3.035c1.087-2.117 3.684-3.464 3.684-3.464s.603 2.85-.852 5.032m-1.2.787a5.47 5.47 0 00-1.186.95m0 0c-.1.148-.204.293-.313.434.715.663 1.523 1.222 2.413 1.65 1.466.707 3.187 1.02 3.187 1.02s-1.452 1.877-3.5 1.443c-1.89-.4-3.707-1.308-5.214-2.606m.313-.434a5.475 5.475 0 00.313-.434m-4.5 3.33c.216-.09.44-.165.668-.225m8.121.255c1.1.334 2.261.504 3.455.504.33 0 .657-.008.978-.023.34.6.702 1.178.702 1.753 0 1.73-1.5 3.231-3.75 3.231-2.25 0-3.75-1.501-3.75-3.231 0-.385.183-1.004.525-1.709"
      />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path
        fillRule="evenodd"
        d="M7.017 4.5c-3.037 0-5.267 2.435-5.267 5.438 0 3.002 2.23 5.436 5.267 5.436.27 0 .534-.02.794-.058l-.227 1.456c-.448 2.08-1.755 3.522-3.84 4.585a.75.75 0 00.401 1.373c4.197 0 6.949-2.805 7.98-7.243.313-1.34.708-3.38.708-5.15 0-3.003-2.23-5.437-5.266-5.437zm11.465 0c-3.037 0-5.266 2.435-5.266 5.438 0 3.002 2.229 5.436 5.266 5.436.27 0 .535-.02.795-.058l-.227 1.456c-.448 2.08-1.755 3.522-3.84 4.585a.75.75 0 00.402 1.373c4.196 0 6.949-2.805 7.979-7.243.313-1.34.708-3.38.708-5.15 0-3.003-2.23-5.437-5.266-5.437z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm2.25-9v-1.125c0-.621.504-1.125 1.125-1.125h1.125m-7.5 3H12m0 0v3.75m0-3.75h.375"
      />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm5.25-13.5l-4.5 4.5 4.5 4.5M6.75 8.25v.75m3-0.75v.75"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM6.75 7.5a.75.75 0 100 1.5.75.75 0 000-1.5zm10.5 8.25a3.75 3.75 0 11-7.5 0A3.75 3.75 0 0117.25 15.75zM8.25 4.5h7.5a4.125 4.125 0 014.125 4.125v6.75a4.125 4.125 0 01-4.125 4.125h-7.5A4.125 4.125 0 014.125 15.75V9A4.125 4.125 0 018.25 4.5z"
      />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12c0-1.8 0-2.7-.36-3.36-.27-.54-.72-.99-1.26-1.26C18.69 7 12 7 12 7s-6.69 0-7.38.36c-.54.27-.99.72-1.26 1.26C3 9.3 3 10.2 3 12s0 2.7.36 3.36c.27.54.72.99 1.26 1.26.69.36 7.38.38 7.38.38s6.69 0 7.38-.38c.54-.27.99-.72 1.26-1.26.36-.69.36-1.2.36-3.36z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.2 9.75l4.8 2.25-4.8 2.25v-4.5z" />
    </svg>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.437 60.437 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443"
      />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    </svg>
  );
}