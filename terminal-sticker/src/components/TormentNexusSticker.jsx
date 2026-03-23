import './TormentNexusSticker.css';

export default function TormentNexusSticker() {
  return (
    <div className="torment-wrapper">
      <svg className="torment-sticker" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sticker-surface" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="50%" stopColor="#111111" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
          <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#888" />
            <stop offset="20%" stopColor="#333" />
            <stop offset="50%" stopColor="#111" />
            <stop offset="80%" stopColor="#444" />
            <stop offset="100%" stopColor="#222" />
          </linearGradient>
          <radialGradient id="lens-depth" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="70%" stopColor="#000000" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          <radialGradient id="hal-eye" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="15%" stopColor="#ffcc00" />
            <stop offset="35%" stopColor="#ff2a00" />
            <stop offset="75%" stopColor="#800000" />
            <stop offset="100%" stopColor="#1a0000" />
          </radialGradient>
          <linearGradient id="glass-flare" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0.02)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <path id="text-arc" d="M 60, 200 A 140, 140 0 0, 0 340, 200" />
        </defs>

        {/* Base circle */}
        <circle cx="200" cy="200" r="198" fill="url(#sticker-surface)" />
        {/* Dashed ring */}
        <circle cx="200" cy="200" r="185" fill="none" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />

        {/* Lens assembly */}
        <g transform="translate(0, -25)">
          <circle cx="200" cy="200" r="110" fill="url(#ring-gradient)" />
          <circle cx="200" cy="200" r="95" fill="url(#lens-depth)" />
          <circle cx="200" cy="200" r="45" fill="url(#hal-eye)" className="lens-glow" />
          <circle cx="200" cy="200" r="45" fill="none" stroke="#ffaa00" strokeWidth="0.5" opacity="0.4" />
          <circle cx="200" cy="200" r="95" fill="url(#glass-flare)" />
        </g>

        {/* Text arc */}
        <text
          fill="#e0e0e0"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="20"
          fontWeight="600"
          letterSpacing="0.12em"
          textAnchor="middle"
        >
          <textPath href="#text-arc" startOffset="50%">
            don't create the torment nexus
          </textPath>
        </text>
      </svg>
    </div>
  );
}
