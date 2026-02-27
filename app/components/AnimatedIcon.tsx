interface AnimatedIconProps {
  name: string;
  color?: string;
  size?: number;
}

export default function AnimatedIcon({
  name,
  color = "#ffffff",
  size = 28,
}: AnimatedIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (name) {
    /* ── Crosshair / Target ── */
    case "crosshair":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke={color}
            strokeWidth="1.2"
            strokeOpacity="0.3"
            className="icon-anim-rotate"
            strokeDasharray="4 3"
          />
          <circle
            cx="12"
            cy="12"
            r="5"
            stroke={color}
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
          <circle
            cx="12"
            cy="12"
            r="1.5"
            fill={color}
            className="icon-anim-pulse"
          />
        </svg>
      );

    /* ── Layers / Stack ── */
    case "layers":
      return (
        <svg {...props}>
          <path
            d="M12 2L2 7l10 5 10-5L12 2z"
            stroke={color}
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeOpacity="0.3"
            className="icon-anim-float-slow"
          />
          <path
            d="M2 12l10 5 10-5"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.5"
            className="icon-anim-float-mid"
          />
          <path
            d="M2 17l10 5 10-5"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-anim-float-fast"
          />
        </svg>
      );

    /* ── Eye ── */
    case "eye":
      return (
        <svg {...props}>
          <g className="icon-anim-blink">
            <path
              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"
              stroke={color}
              strokeWidth="1.2"
              strokeLinejoin="round"
              strokeOpacity="0.5"
            />
            <circle
              cx="12"
              cy="12"
              r="3.5"
              stroke={color}
              strokeWidth="1.2"
            />
          </g>
          <circle
            cx="12"
            cy="12"
            r="1.5"
            fill={color}
            className="icon-anim-pulse"
          />
        </svg>
      );

    /* ── Zap / Lightning ── */
    case "zap":
      return (
        <svg {...props}>
          <path
            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={color}
            fillOpacity="0.08"
            className="icon-anim-flash"
          />
        </svg>
      );

    /* ── Package / Box ── */
    case "package":
      return (
        <svg {...props} className="icon-anim-bounce">
          <path
            d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.6"
          />
          <path
            d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.3"
          />
        </svg>
      );

    /* ── Rocket ── */
    case "rocket":
      return (
        <svg {...props} className="icon-anim-rocket">
          <path
            d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.3"
          />
          <path
            d="M12 15l-3-3"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M22 2s-4.67-.33-8 3L9 10l5 5 5-5c3.33-3.33 3-8 3-8z"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.7"
          />
          <circle cx="17" cy="7" r="1.5" fill={color} fillOpacity="0.5" />
        </svg>
      );

    /* ── Shield ── */
    case "shield":
      return (
        <svg {...props}>
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke={color}
            strokeWidth="1.2"
            strokeLinejoin="round"
            fill={color}
            fillOpacity="0.06"
            className="icon-anim-shield-pulse"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.7"
          />
        </svg>
      );

    /* ── Loop / Sync arrows ── */
    case "loop":
      return (
        <svg {...props} className="icon-anim-rotate-slow">
          <path
            d="M21.5 2v6h-6"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.5"
          />
          <path
            d="M2.5 22v-6h6"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.5"
          />
          <path
            d="M3.34 8A9 9 0 0121.5 8M2.5 16a9 9 0 0018.16 0"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );

    /* ── Compass ── */
    case "compass":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={color}
            strokeWidth="1.2"
            strokeOpacity="0.3"
          />
          <g className="icon-anim-oscillate" style={{ transformOrigin: "12px 12px" }}>
            <polygon
              points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"
              stroke={color}
              strokeWidth="1.2"
              strokeLinejoin="round"
              fill={color}
              fillOpacity="0.15"
            />
          </g>
          <circle cx="12" cy="12" r="1" fill={color} fillOpacity="0.6" />
        </svg>
      );

    /* ── Brain ── */
    case "brain":
      return (
        <svg {...props} className="icon-anim-pulse-slow">
          <path
            d="M12 2a5 5 0 014.78 3.53 3.5 3.5 0 012.72 3.4A4 4 0 0118 16.5V20a1 1 0 01-1 1h-4"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.5"
          />
          <path
            d="M12 2a5 5 0 00-4.78 3.53 3.5 3.5 0 00-2.72 3.4A4 4 0 006 16.5V20a1 1 0 001 1h4"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.5"
          />
          <path
            d="M12 2v19"
            stroke={color}
            strokeWidth="1.2"
            strokeOpacity="0.15"
          />
          <path
            d="M8 8h.5M15.5 8H16M8.5 13H9M15 13h.5"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            className="icon-anim-synapse"
          />
        </svg>
      );

    /* ── Fallback: numbered indicator ── */
    default:
      return (
        <span
          className="font-mono text-[28px] font-medium leading-none tracking-tight select-none"
          style={{ color, opacity: 0.2 }}
        >
          {name}
        </span>
      );
  }
}
