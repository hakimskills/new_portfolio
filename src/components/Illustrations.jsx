// Hand-drawn, line-art style SVG illustrations for the portfolio.
// All strokes use currentColor via the `ink` class so they inherit #1E1B14 by default.

export function BlobYellow({ className = "" }) {
  return (
    <svg viewBox="0 0 420 420" className={className} preserveAspectRatio="none">
      <path
        d="M60 70 C 110 20, 250 10, 320 55 C 390 100, 400 190, 370 260
           C 345 320, 400 350, 360 390 C 300 420, 120 415, 70 380
           C 20 345, 30 260, 15 200 C 0 130, 20 110, 60 70 Z"
        fill="#F0C24E"
      />
    </svg>
  );
}

export function BlobRed({ className = "" }) {
  return (
    <svg viewBox="0 0 400 320" className={className} preserveAspectRatio="none">
      <path
        d="M40 40 L 300 20 L 380 80 L 360 180 L 320 300 L 60 300 L 10 190 Z"
        fill="#D6381F"
      />
    </svg>
  );
}

export function CardPaper({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} preserveAspectRatio="none">
      <path
        d="M15 30 L 340 10 L 390 60 L 385 260 L 320 290 L 20 280 L 5 90 Z"
        fill="#F6F1DF"
      />
    </svg>
  );
}

export function SunBurst({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="#F6F1DF" strokeWidth="4" strokeLinecap="round">
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 50 + Math.cos(angle) * 14;
        const y1 = 50 + Math.sin(angle) * 14;
        const x2 = 50 + Math.cos(angle) * 40;
        const y2 = 50 + Math.sin(angle) * 40;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </svg>
  );
}

export function StarBurstOutline({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="#1E1B14" strokeWidth="3" strokeLinejoin="round">
      <path d="M50 4 L58 38 L92 30 L64 50 L92 70 L58 62 L50 96 L42 62 L8 70 L36 50 L8 30 L42 38 Z" />
    </svg>
  );
}

export function SquiggleArrow({ className = "" }) {
  return (
    <svg viewBox="0 0 120 70" className={className} fill="none" stroke="#1E1B14" strokeWidth="3" strokeLinecap="round">
      <path d="M5 10 C 25 5, 30 30, 50 25 C 70 20, 65 45, 90 40" />
      <path d="M75 32 L 92 41 L 80 55" />
    </svg>
  );
}

export function CurlyLine({ className = "" }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="#D6381F" strokeWidth="3" strokeLinecap="round">
      <path d="M30 5 C 45 5, 45 20, 30 20 C 15 20, 15 35, 30 35 C 40 35, 42 45, 32 52" />
    </svg>
  );
}

export function WavyUnderline({ className = "" }) {
  return (
    <svg viewBox="0 0 160 14" className={className} fill="none" stroke="#D6381F" strokeWidth="3" strokeLinecap="round">
      <path d="M2 8 C 15 2, 25 14, 38 8 C 51 2, 61 14, 74 8 C 87 2, 97 14, 110 8 C 123 2, 133 14, 146 8 C 152 6, 156 8, 158 8" />
    </svg>
  );
}

export function WavyUnderlineCream({ className = "" }) {
  return (
    <svg viewBox="0 0 160 14" className={className} fill="none" stroke="#FBF7EA" strokeWidth="3" strokeLinecap="round">
      <path d="M2 8 C 15 2, 25 14, 38 8 C 51 2, 61 14, 74 8 C 87 2, 97 14, 110 8 C 123 2, 133 14, 146 8 C 152 6, 156 8, 158 8" />
    </svg>
  );
}

export function TapeStrip({ className = "" }) {
  return (
    <svg viewBox="0 0 90 34" className={className}>
      <rect x="1" y="1" width="88" height="32" fill="#D6381F" opacity="0.88" transform="rotate(-2 45 17)" />
    </svg>
  );
}

export function TapeStripDark({ className = "" }) {
  return (
    <svg viewBox="0 0 60 44" className={className}>
      <rect x="1" y="1" width="58" height="42" fill="#1E1B14" opacity="0.85" transform="rotate(4 30 22)" />
    </svg>
  );
}

export function DotCluster({ className = "" }) {
  const dots = [
    [8, 8], [24, 6], [40, 10],
    [6, 24], [22, 24], [38, 26],
    [10, 40], [26, 40],
  ];
  return (
    <svg viewBox="0 0 48 48" className={className}>
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#D6381F" />
      ))}
    </svg>
  );
}

export function PlantVase({ className = "" }) {
  return (
    <svg viewBox="0 0 160 220" className={className} fill="none">
      <g stroke="#1E1B14" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M60 95 C 45 60, 55 30, 70 10" />
        <path d="M75 95 C 78 55, 90 35, 100 15" />
        <path d="M85 95 C 100 65, 118 55, 130 45" />
        <path d="M70 95 C 60 70, 40 60, 25 55" />
      </g>
      <ellipse cx="72" cy="10" rx="10" ry="16" fill="#1E1B14" transform="rotate(-20 72 10)" />
      <ellipse cx="102" cy="16" rx="9" ry="15" fill="#1E1B14" transform="rotate(15 102 16)" />
      <ellipse cx="129" cy="46" rx="8" ry="14" fill="#1E1B14" transform="rotate(55 129 46)" />
      <ellipse cx="25" cy="56" rx="8" ry="14" fill="#1E1B14" transform="rotate(-55 25 56)" />
      <path d="M45 90 L115 90 L108 190 Q80 200 52 190 Z" fill="#F0C24E" stroke="#1E1B14" strokeWidth="3.5" strokeLinejoin="round" />
      <rect x="10" y="190" width="140" height="26" fill="#1E1B14" />
    </svg>
  );
}

export function PlantPot({ className = "" }) {
  return (
    <svg viewBox="0 0 140 180" className={className} fill="none">
      <g stroke="#1E1B14" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M55 90 C 42 55, 50 25, 62 6" />
        <path d="M68 90 C 70 50, 82 30, 92 12" />
        <path d="M78 90 C 92 62, 108 52, 120 42" />
      </g>
      <ellipse cx="64" cy="6" rx="9" ry="15" fill="#1E1B14" transform="rotate(-18 64 6)" />
      <ellipse cx="93" cy="13" rx="8" ry="14" fill="#1E1B14" transform="rotate(18 93 13)" />
      <ellipse cx="120" cy="43" rx="7" ry="13" fill="#1E1B14" transform="rotate(55 120 43)" />
      <path d="M35 88 L105 88 L96 160 Q70 170 44 160 Z" fill="#D6381F" stroke="#1E1B14" strokeWidth="3.5" strokeLinejoin="round" />
    </svg>
  );
}

export function CoffeeMug({ className = "" }) {
  return (
    <svg viewBox="0 0 100 90" className={className} fill="none">
      <path d="M15 30 H70 V64 Q70 80 42 80 Q14 80 14 64 Z" fill="#D6381F" stroke="#1E1B14" strokeWidth="3" strokeLinejoin="round" />
      <path d="M70 38 Q92 38 92 54 Q92 70 70 68" stroke="#1E1B14" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M28 18 Q30 8 24 2" stroke="#1E1B14" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M42 14 Q44 4 38 -2" stroke="#1E1B14" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

export function StickyNote({ className = "" }) {
  return (
    <svg viewBox="0 0 200 180" className={className}>
      <rect x="6" y="6" width="188" height="168" fill="#FBF7EA" stroke="#1E1B14" strokeWidth="2.5" transform="rotate(3 100 90)" />
    </svg>
  );
}

// Line-art seated character, side profile — used large in the hero.
export function CharacterHero({ className = "" }) {
  return (
    <svg viewBox="0 0 420 460" className={className} fill="none">
      <g stroke="#1E1B14" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* hair */}
        <path d="M140 150 C 130 90, 175 45, 235 48 C 290 51, 320 95, 310 140 C 330 150, 335 175, 320 190 C 322 205, 312 215, 300 212 C 300 230, 285 235, 278 225" fill="#1E1B14" />
        {/* face + neck */}
        <path d="M300 212 C 305 240, 300 260, 285 272 L 285 300 L 320 320" fill="none" />
        <path d="M300 212 C 298 195, 280 185, 260 190 C 235 196, 225 220, 235 245 C 242 262, 262 274, 285 272" fill="#F2ECD8" />
        <circle cx="272" cy="222" r="3.2" fill="#1E1B14" />
        <path d="M255 205 C 262 200, 272 200, 278 204" />
        <path d="M255 250 C 262 256, 272 256, 278 251" />
        {/* body / shirt */}
        <path
          d="M120 460 L120 380 C 120 330, 150 300, 190 292 L 240 288 C 275 286, 310 300, 325 330 L 340 380 L 340 460"
          fill="#F6F1DF"
        />
        <path d="M180 300 L 178 340 L 205 336 L 195 300" fill="none" />
        <path d="M120 460 L120 385" />
        <path d="M340 460 L340 385" />
        {/* arm resting on table */}
        <path d="M235 292 C 260 300, 285 300, 300 285" fill="none" />
        <path d="M300 285 C 330 270, 360 275, 385 292" fill="none" />
      </g>
      {/* desk line */}
      <line x1="30" y1="392" x2="410" y2="392" stroke="#1E1B14" strokeWidth="4" strokeLinecap="round" />
      {/* steam from mug, drawn near desk left side */}
      <g stroke="#1E1B14" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5">
        <path d="M100 380 Q 96 365 104 355 Q 112 345 106 332" />
        <path d="M118 380 Q 122 368 116 358 Q 110 348 118 336" />
      </g>
    </svg>
  );
}

// Small portrait sticker for the About section — head + shoulders, cap.
export function CharacterPortrait({ className = "" }) {
  return (
    <svg viewBox="0 0 240 260" className={className} fill="none">
      <rect x="0" y="0" width="240" height="260" fill="#EDE6CF" />
      <g stroke="#1E1B14" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* shoulders/shirt */}
        <path d="M20 260 L20 220 C 20 190, 45 170, 80 165 L 150 165 C 185 168, 210 190, 210 220 L 210 260" fill="#1E1B14" />
        {/* neck */}
        <path d="M100 165 L100 190 L 140 190 L 140 165" fill="#E7B98A" />
        {/* head */}
        <path d="M85 100 C 85 60, 110 40, 140 42 C 170 44, 190 68, 186 100 C 200 104, 200 125, 186 130 C 184 150, 168 165, 145 165 C 118 165, 100 150, 96 130 C 84 128, 80 106, 85 100 Z" fill="#E7B98A" />
        {/* cap */}
        <path d="M78 96 C 78 60, 105 34, 140 34 C 172 34, 196 56, 198 88 L 198 100 L 78 100 Z" fill="#1E1B14" />
        <path d="M186 92 C 210 90, 226 96, 232 106 C 220 112, 198 110, 190 104" fill="#1E1B14" />
        {/* face features */}
        <circle cx="160" cy="98" r="3" fill="#1E1B14" />
        <path d="M150 82 C 156 78, 165 78, 170 82" />
        <path d="M148 118 C 155 123, 165 123, 171 117" />
        <path d="M178 100 L 186 104 L 180 110" fill="none" />
      </g>
    </svg>
  );
}

export function QuoteMark({ className = "" }) {
  return (
    <svg viewBox="0 0 60 46" className={className}>
      <text x="0" y="40" fontSize="60" fontFamily="Fraunces, serif" fill="#D6381F">&ldquo;</text>
    </svg>
  );
}

export function SmileyStamp({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="4" y="4" width="92" height="92" fill="#D6381F" stroke="#1E1B14" strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="50" cy="46" r="24" fill="none" stroke="#FBF7EA" strokeWidth="3" />
      <circle cx="41" cy="40" r="3" fill="#FBF7EA" />
      <circle cx="59" cy="40" r="3" fill="#FBF7EA" />
      <path d="M36 54 Q50 68 64 54" stroke="#FBF7EA" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function RiotHelm({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="#1E1B14" strokeWidth="3" strokeLinejoin="round">
      <path d="M32 6 L52 18 V34 C52 46 43 55 32 58 C21 55 12 46 12 34 V18 Z" />
      <path d="M32 20 L32 44 M22 30 L42 30" strokeWidth="2.5" />
    </svg>
  );

}
export function CurlySwirlArrow({ className = "" }) {
  return (
    <svg viewBox="0 0 120 110" className={className} fill="none" stroke="#1E1B14" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M95 92 C 112 92, 112 62, 92 62 C 76 62, 70 78, 82 86 C 96 95, 108 82, 98 68" />
      <path d="M55 45 C 42 32, 30 30, 20 34" />
      <path d="M35 20 L18 33 L30 50" />
    </svg>
  );
}

export function ArrowTick({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="#FBF7EA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 5 L14 10 L6 15" />
    </svg>
  );
}
