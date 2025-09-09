export function Illustration() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Phone */}
      <rect
        x="100"
        y="100"
        width="150"
        height="250"
        rx="20"
        stroke="#FF0000"
        strokeWidth="2"
        className="animate-pulse"
      />
      {/* Screen Content */}
      <rect x="110" y="120" width="130" height="20" rx="5" stroke="white" strokeWidth="2" />
      <rect x="110" y="150" width="130" height="20" rx="5" stroke="white" strokeWidth="2" />
      <rect x="110" y="180" width="130" height="20" rx="5" stroke="white" strokeWidth="2" />
      {/* Hi there! Text */}
      <text x="110" y="280" className="text-red-500 font-bold text-lg" style={{ fill: "#FF0000" }}>
        Hi there!
      </text>
      {/* Hand */}
      <path d="M280 200 C 300 180, 320 170, 340 190" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  )
}
