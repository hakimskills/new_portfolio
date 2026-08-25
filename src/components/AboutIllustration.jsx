export default function AboutIllustration() {
  return (
    <svg
      viewBox="0 0 420 460"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrated portrait"
    >
      {/* Yellow background */}
      <path
        d="M35 35 C80 15 130 30 170 22 C230 10 300 25 365 50
           L385 390 C340 420 290 405 245 425
           C180 450 100 420 45 395Z"
        fill="#F4D477"
      />

      {/* Red shape */}
      <path
        d="M300 40 C350 25 385 55 375 105
           C365 145 320 150 290 125
           C270 105 270 60 300 40Z"
        fill="#D93425"
      />

      {/* Head */}
      <path
        d="M135 170 C132 125 160 90 205 90
           C252 90 278 125 274 177
           C271 225 244 258 205 258
           C166 258 139 225 135 170Z"
        fill="#E8BFA4"
      />

      {/* Hair */}
      <path
        d="M132 170 C120 125 137 85 173 68
           C210 50 260 67 277 105
           C287 128 281 153 270 169
           C259 143 246 126 218 122
           C190 118 160 135 132 170Z"
        fill="#151515"
      />

      {/* Hair details */}
      <path
        d="M145 116 C155 83 185 70 215 73
           M159 98 C177 72 206 68 230 79
           M210 73 C236 73 258 89 269 111"
        fill="none"
        stroke="#151515"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Ear */}
      <path
        d="M134 165 C115 155 111 180 124 194
           C130 200 137 196 141 187"
        fill="#E8BFA4"
      />

      {/* Eyes */}
      <circle cx="178" cy="170" r="4" fill="#151515" />
      <circle cx="232" cy="170" r="4" fill="#151515" />

      {/* Eyebrows */}
      <path
        d="M163 153 Q178 145 191 152"
        fill="none"
        stroke="#151515"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M220 152 Q234 145 247 153"
        fill="none"
        stroke="#151515"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Nose */}
      <path
        d="M205 174 C201 187 198 195 204 199
           C209 202 215 200 218 197"
        fill="none"
        stroke="#151515"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Smile */}
      <path
        d="M190 215 Q205 226 220 214"
        fill="none"
        stroke="#151515"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Neck */}
      <path
        d="M178 245 L178 285 L230 285 L230 245Z"
        fill="#E8BFA4"
      />

      {/* Shirt */}
      <path
        d="M178 275 C145 282 113 303 96 340
           L78 405 L332 405 L310 340
           C295 303 263 282 230 275
           C215 300 193 300 178 275Z"
        fill="#151515"
      />

      {/* Shirt pocket */}
      <path
        d="M235 315 L278 315 L278 350 L235 350Z"
        fill="none"
        stroke="#F7EDCF"
        strokeWidth="4"
      />

      {/* Arm */}
      <path
        d="M100 340 C75 347 57 365 50 393"
        fill="none"
        stroke="#151515"
        strokeWidth="22"
        strokeLinecap="round"
      />

      {/* Red dots */}
      <circle cx="320" cy="300" r="7" fill="#D93425" />
      <circle cx="342" cy="320" r="5" fill="#D93425" />
      <circle cx="315" cy="332" r="4" fill="#D93425" />

      {/* Star */}
      <path
        d="M55 80 L61 98 L80 98 L65 109
           L71 127 L55 116 L39 127 L45 109
           L30 98 L49 98Z"
        fill="#151515"
      />

      {/* Caption */}
      <text
        x="285"
        y="375"
        fill="#151515"
        fontSize="11"
        fontFamily="monospace"
        transform="rotate(-4 285 375)"
      >
        HELLO!
      </text>
    </svg>
  );
}