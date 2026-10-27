// Cinematic scene illustrations for the journey. Pure SVG, styled through CSS classes in index.css
// so they follow the --accent colour as the story moves. Decorative only (aria-hidden by the parent).

const VIEW = '0 0 480 400'

export function TerminalScene() {
  return (
    <svg viewBox={VIEW} className="art" focusable="false">
      <rect x="30" y="50" width="420" height="290" rx="14" className="f-panel s-line" />
      <path d="M30 88h420" className="s-line" fill="none" />
      <circle cx="56" cy="69" r="5" className="f-dim" />
      <circle cx="74" cy="69" r="5" className="f-dim" />
      <circle cx="92" cy="69" r="5" className="f-acc" />
      <text x="52" y="126" className="art-mono t-dim">C:\&gt; ping 192.168.1.1</text>
      <text x="52" y="152" className="art-mono t-acc">Reply from 192.168.1.1: time=1ms</text>
      <text x="52" y="190" className="art-mono t-dim">C:\&gt; ipconfig /all</text>
      <text x="52" y="216" className="art-mono t-acc">Default Gateway . . : 192.168.1.1</text>
      <text x="52" y="254" className="art-mono t-dim">C:\&gt; npm create vite@latest</text>
      <text x="52" y="280" className="art-mono t-acc">Project ready.</text>
      <rect x="52" y="296" width="9" height="16" className="f-acc blink" />
      <g transform="translate(300 262)">
        <rect width="140" height="64" rx="10" className="f-panel2 s-acc" strokeWidth="1.5" />
        <text x="16" y="28" className="art-mono t-acc">DIPLOMA</text>
        <text x="16" y="48" className="art-mono t-dim">ICT · 2023–25</text>
      </g>
      <circle cx="450" cy="50" r="4" className="f-acc led" />
      <circle cx="30" cy="340" r="4" className="f-acc led" style={{ animationDelay: '.6s' }} />
    </svg>
  )
}

export function ServerScene({ reduced }) {
  const racks = [0, 1, 2, 3]
  const labels = ['WIN-SRV-01 · AD DS', 'FILE · PRINT', 'DHCP · DNS', 'BACKUP']
  const cable = (i) => `M410 ${84 + i * 66} C 452 ${84 + i * 66}, 452 352, ${392 - i * 22} 352`

  return (
    <svg viewBox={VIEW} className="art" focusable="false">
      {racks.map((i) => (
        <g key={i} transform={`translate(70 ${56 + i * 66})`}>
          <rect width="340" height="56" rx="9" className="f-panel s-line" />
          <text x="18" y="33" className="art-mono t-dim">{labels[i]}</text>
          {[0, 1, 2, 3, 4].map((v) => (
            <path key={v} d={`M${170 + v * 9} 18v20`} className="s-line" fill="none" />
          ))}
          {[0, 1, 2].map((l) => (
            <circle
              key={l}
              cx={286 + l * 16}
              cy="28"
              r="4"
              className="f-acc led"
              style={{ animationDelay: `${(i * 0.35 + l * 0.5).toFixed(2)}s` }}
            />
          ))}
        </g>
      ))}
      <rect x="170" y="338" width="240" height="30" rx="8" className="f-panel2 s-line" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((p) => (
        <rect key={p} x={184 + p * 28} y="347" width="16" height="12" rx="2" className="f-dim" />
      ))}
      {racks.map((i) => (
        <path key={i} d={cable(i)} className="s-acc draw" fill="none" strokeWidth="1.6" pathLength="1" />
      ))}
      {!reduced &&
        racks.map((i) => (
          <circle key={i} r="3.2" className="f-acc">
            <animateMotion dur={`${(2.4 + i * 0.45).toFixed(2)}s`} repeatCount="indefinite" path={cable(i)} />
          </circle>
        ))}
    </svg>
  )
}

export function WifiScene() {
  const arcs = [34, 62, 92]
  const cx = 240
  const cy = 128
  const arcPath = (r) => {
    const d = r * 0.72
    return `M ${cx - d} ${cy - d} A ${r} ${r} 0 0 1 ${cx + d} ${cy - d}`
  }
  const lit = new Set([1, 4, 6, 9, 10, 13])

  return (
    <svg viewBox={VIEW} className="art" focusable="false">
      {[[60, 40], [120, 70], [380, 50], [430, 90], [330, 28]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" className="f-dim led" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}
      <rect x="150" y="150" width="180" height="190" rx="6" className="f-panel s-line" />
      {Array.from({ length: 16 }).map((_, i) => (
        <rect
          key={i}
          x={166 + (i % 4) * 40}
          y={168 + Math.floor(i / 4) * 40}
          width="24"
          height="24"
          rx="3"
          className={lit.has(i) ? 'f-acc win' : 'f-dim'}
          style={lit.has(i) ? { animationDelay: `${i * 0.2}s` } : undefined}
        />
      ))}
      <path d={`M${cx} 150 V ${cy + 6}`} className="s-line" fill="none" strokeWidth="3" />
      <circle cx={cx} cy={cy} r="7" className="f-acc" />
      {arcs.map((r, i) => (
        <path
          key={r}
          d={arcPath(r)}
          className="s-acc wifi-arc"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
      <g transform="translate(60 250)">
        <rect width="38" height="64" rx="8" className="f-panel2 s-line" />
        <circle cx="19" cy="54" r="2.4" className="f-dim" />
      </g>
      <g transform="translate(386 232)">
        <rect width="38" height="64" rx="8" className="f-panel2 s-line" />
        <circle cx="19" cy="54" r="2.4" className="f-dim" />
      </g>
      <path d={`M${cx} ${cy} L 98 262`} className="s-acc" fill="none" strokeDasharray="3 7" opacity="0.45" />
      <path d={`M${cx} ${cy} L 386 244`} className="s-acc" fill="none" strokeDasharray="3 7" opacity="0.45" />
      <path
        className="wave s-acc"
        fill="none"
        strokeWidth="2"
        opacity="0.7"
        d={`M-120 352${' q30 -14 60 0 t60 0'.repeat(6)}`}
      />
      <path
        className="wave wave--slow s-line"
        fill="none"
        strokeWidth="2"
        d={`M-120 372${' q30 -14 60 0 t60 0'.repeat(6)}`}
      />
    </svg>
  )
}

export function SunScene() {
  return (
    <svg viewBox={VIEW} className="art" focusable="false">
      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" className="stop-acc" stopOpacity="0.95" />
          <stop offset="55%" className="stop-acc" stopOpacity="0.35" />
          <stop offset="100%" className="stop-acc" stopOpacity="0" />
        </radialGradient>
        <clipPath id="sunClip">
          <rect x="52" y="92" width="376" height="224" rx="0" />
        </clipPath>
      </defs>
      <rect x="52" y="52" width="376" height="264" rx="14" className="f-panel s-line" />
      <path d="M52 92h376" className="s-line" fill="none" />
      <circle cx="76" cy="72" r="5" className="f-dim" />
      <circle cx="94" cy="72" r="5" className="f-dim" />
      <circle cx="112" cy="72" r="5" className="f-dim" />
      <rect x="150" y="62" width="180" height="20" rx="10" className="f-panel2 s-line" />
      <text x="240" y="76" textAnchor="middle" className="art-mono t-dim" style={{ fontSize: '11px' }}>
        sunmega.co.ke
      </text>
      <g clipPath="url(#sunClip)">
        <g className="sun">
          <circle cx="240" cy="236" r="118" fill="url(#sunGlow)" />
          <circle cx="240" cy="236" r="48" className="f-acc" />
        </g>
        <rect x="52" y="262" width="376" height="60" className="f-panel" />
        <path d="M52 262h376" className="s-line" fill="none" />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={`h${i}`} d={`M${52 + i * 12} 316 L ${92 + i * 78} 262`} className="s-acc" fill="none" opacity="0.35" />
        ))}
        {[0, 1, 2].map((i) => (
          <path key={`v${i}`} d={`M52 ${280 + i * 14}H428`} className="s-acc" fill="none" opacity="0.25" />
        ))}
      </g>
      <rect x="76" y="108" width="64" height="8" rx="4" className="f-dim" />
      <rect x="338" y="108" width="24" height="8" rx="4" className="f-dim" />
      <rect x="370" y="108" width="34" height="8" rx="4" className="f-acc" />
      <rect x="76" y="140" width="150" height="14" rx="4" className="f-dim" />
      <rect x="76" y="162" width="104" height="14" rx="4" className="f-dim" />
      <g transform="translate(330 138)">
        <rect width="74" height="38" rx="8" className="f-panel2 s-acc" strokeWidth="1.4" />
        <rect x="14" y="17" width="12" height="10" rx="2" className="f-acc" />
        <path d="M16 17v-4a4 4 0 0 1 8 0v4" className="s-acc" fill="none" strokeWidth="1.6" />
        <text x="32" y="26" className="art-mono t-acc" style={{ fontSize: '10px' }}>PAY</text>
      </g>
    </svg>
  )
}

export function NetworkScene() {
  const nodes = ['Support', 'Networks', 'Web', 'Hosting', 'Security', 'Payments']
  const cx = 240
  const cy = 200
  const point = (i) => {
    const a = (Math.PI * 2 * i) / nodes.length - Math.PI / 2
    return { x: cx + Math.cos(a) * 150, y: cy + Math.sin(a) * 118, cos: Math.cos(a) }
  }

  return (
    <svg viewBox={VIEW} className="art" focusable="false">
      {nodes.map((label, i) => {
        const { x, y } = point(i)
        return <path key={label} d={`M${cx} ${cy} L ${x} ${y}`} className="s-acc draw" fill="none" strokeWidth="1.5" pathLength="1" />
      })}
      <circle cx={cx} cy={cy} r="30" className="s-acc pulse" fill="none" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="30" className="f-panel2 s-acc" strokeWidth="2" />
      <text x={cx} y={cy + 6} textAnchor="middle" className="art-mono t-acc" style={{ fontSize: '17px', fontWeight: 500 }}>
        HA
      </text>
      {nodes.map((label, i) => {
        const { x, y, cos } = point(i)
        const anchor = cos > 0.3 ? 'start' : cos < -0.3 ? 'end' : 'middle'
        const dx = cos > 0.3 ? 16 : cos < -0.3 ? -16 : 0
        const dy = Math.abs(cos) <= 0.3 ? (y < cy ? -16 : 24) : 4
        return (
          <g key={label}>
            <circle cx={x} cy={y} r="8" className="f-acc led" style={{ animationDelay: `${i * 0.3}s` }} />
            <text x={x + dx} y={y + dy} textAnchor={anchor} className="art-mono t-dim">
              {label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export const SCENES = {
  terminal: TerminalScene,
  server: ServerScene,
  wifi: WifiScene,
  sun: SunScene,
  network: NetworkScene,
}
