interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export type IconName =
  | "arrow-left"
  | "arrow-right"
  | "arrow-up-right"
  | "arrow-down"
  | "arrow-up"
  | "check"
  | "check-circle"
  | "close"
  | "close-circle"
  | "code"
  | "device"
  | "chip"
  | "chart"
  | "mail"
  | "github"
  | "linkedin"
  | "menu"
  | "layers"
  | "shield"
  | "sparkle"
  | "git-branch"
  | "user-lock"
  | "list-check"
  | "diagram"
  | "rocket"
  | "alert"
  | "cubes"
  | "calendar"
  | "file"
  | "circle"
  | "key"
  | "heart"
  | "box"
  | "users"
  | "bell"
  | "monitor"
  | "server"
  | "cloud"
  | "android"
  | "sitemap";

const PATHS: Record<IconName, React.ReactNode> = {
  "arrow-left": <path d="M20 12H4m0 0 6-6m-6 6 6 6" />,
  "arrow-right": <path d="M4 12h16m0 0-6-6m6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7m0 0H8m9 0v9" />,
  "arrow-down": <path d="M12 4v16m0 0 6-6m-6 6-6-6" />,
  "arrow-up": <path d="M12 20V4m0 0 6 6m-6-6-6 6" />,
  check: <path d="m4 12 5 5L20 6" />,
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  close: <path d="M6 6 18 18M18 6 6 18" />,
  "close-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6m0-6-6 6" />
    </>
  ),
  code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />,
  device: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M10 2v4m4-4v4m-4 12v4m4-4v4M2 10h4m-4 4h4m12-4h4m-4 4h4" />
    </>
  ),
  chart: <path d="M4 20V4m0 16h16M8 16v-5m4 5V7m4 9v-8" />,
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  github: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.1 4.7 18 5 18 5c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      stroke="none"
      d="M20.4 20.4h-3.6v-5.5c0-1.3 0-3-1.8-3-1.9 0-2.2 1.4-2.2 2.9v5.6H9.3V9h3.4v1.5h.1c.5-.9 1.6-1.8 3.3-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1Zm1.8 13H3.5V9h3.6v11.4ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-1-.8-1.7-1.8-1.7Z"
    />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm9 9-9 5-9-5m18 4-9 5-9-5" />,
  sparkle: (
    <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  ),
  "git-branch": (
    <>
      <circle cx="7" cy="5" r="2" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="17" cy="9" r="2" />
      <path d="M7 7v10m10-6a5 5 0 0 1-5 5H9" />
    </>
  ),
  shield: <path d="M12 3 5 6v6c0 4.2 2.9 7.7 7 9 4.1-1.3 7-4.8 7-9V6l-7-3Z" />,
  "user-lock": (
    <>
      <circle cx="10" cy="8" r="3.5" />
      <path d="M3.5 20a6.5 6.5 0 0 1 13 0" />
      <rect x="15" y="13" width="6" height="5" rx="1" />
    </>
  ),
  "list-check": (
    <>
      <path d="m3 6 2 2 3-3M3 13l2 2 3-3M3 20l2 2 3-3" />
      <path d="M12 7h9M12 14h9M12 21h9" />
    </>
  ),
  diagram: (
    <>
      <rect x="9" y="2" width="6" height="5" rx="1" />
      <rect x="2" y="17" width="6" height="5" rx="1" />
      <rect x="16" y="17" width="6" height="5" rx="1" />
      <path d="M12 7v5M5 17v-5h14v5" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 2c3.5 2.5 5 6 5 10l-2 3H9l-2-3c0-4 1.5-7.5 5-10Z" />
      <path d="M9 15 5 21m10-6 4 6M9 19h6" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 9v5m0 3h.01" />
    </>
  ),
  cubes: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
      <path d="M13 3h8v8M11 7h2v2M7 11v2h2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4m8-4v4" />
    </>
  ),
  file: (
    <>
      <path d="M6 2h8l4 4v16H6V2Z" />
      <path d="M14 2v5h4M9 13h6m-6 4h6" />
    </>
  ),
  circle: <circle cx="12" cy="12" r="4" />,
  key: (
    <>
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9m-3 0v3m-2-3v2" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.4-7-9.3A4.2 4.2 0 0 1 12 8a4.2 4.2 0 0 1 7 2.7C19 15.6 12 20 12 20Z" />
  ),
  box: (
    <>
      <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z" />
      <path d="M3 7.5 12 12l9-4.5M12 12v9" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 5.2a3.5 3.5 0 0 1 0 5.6M17.5 20a6.5 6.5 0 0 0-2-4.6" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4l2-2Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8 21h8m-4-4v4" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  cloud: <path d="M7 18h10a4 4 0 0 0 .6-8A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7Z" />,
  android: (
    <>
      <path d="M6 11h12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6Z" />
      <path d="M7 11a5 5 0 0 1 10 0M9 7 7.5 5m7.5 2L16.5 5M4 12v4m16-4v4M9 19v2m6-2v2" />
    </>
  ),
  sitemap: (
    <>
      <rect x="9" y="2" width="6" height="5" rx="1" />
      <rect x="2" y="17" width="6" height="5" rx="1" />
      <rect x="16" y="17" width="6" height="5" rx="1" />
      <path d="M12 7v4M5 17v-6h14v6" />
    </>
  ),
};

/**
 * Iconos SVG en línea (trazo 1.6, currentColor).
 * Sustituyen a Font Awesome para eliminar ~279 KB de
 * terceros y el CSS que bloqueaba el render.
 */
export default function Icon({ name, size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
