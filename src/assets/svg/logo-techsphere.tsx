export function LogoTechSphere() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm"
    >
      <defs>
        <linearGradient id="sphereGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <radialGradient id="highlightGradient" cx="30%" cy="30%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="70%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="url(#sphereGradient)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.5"
      />
      <circle
        cx="20"
        cy="20"
        r="12"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
      <circle cx="20" cy="8" r="1.5" fill="rgba(255,255,255,0.9)" />
      <circle cx="32" cy="20" r="1.5" fill="rgba(255,255,255,0.9)" />
      <circle cx="20" cy="32" r="1.5" fill="rgba(255,255,255,0.9)" />
      <circle cx="8" cy="20" r="1.5" fill="rgba(255,255,255,0.9)" />
      <line x1="20" y1="8" x2="20" y2="32" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
      <line x1="8" y1="20" x2="32" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
      <circle
        cx="20"
        cy="20"
        r="3"
        fill="url(#innerGradient)"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="0.5"
      />
      <ellipse
        cx="16"
        cy="14"
        rx="8"
        ry="6"
        fill="url(#highlightGradient)"
        transform="rotate(-20 16 14)"
      />
      <circle
        cx="20"
        cy="20"
        r="19"
        fill="none"
        stroke="url(#sphereGradient)"
        strokeWidth="0.5"
        opacity="0.3"
      />
    </svg>
  );
}
