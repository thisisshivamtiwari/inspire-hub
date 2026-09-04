/**
 * Inspire Hub star-constellation mark — ported verbatim from the design
 * reference (doc/html_reference). `IHMarkDefs` renders the sprite once at the
 * top of the document; every `IHMark` then references it via <use>.
 */

const STARS = [
  { t: 'translate(11,15) scale(.40)', fill: '#8E24C9' },
  { t: 'translate(16,24) scale(.30)', fill: '#2C6FE8' },
  { t: 'translate(31,11) scale(.42)', fill: '#00AFDF' },
  { t: 'translate(18,30) scale(.95)', fill: '#8E24C9' },
  { t: 'translate(25,21) scale(.70)', fill: '#2C6FE8' },
  { t: 'translate(40,17) scale(.85)', fill: '#00AFDF' },
  { t: 'translate(54,21) scale(.58)', fill: '#8BC53F' },
  { t: 'translate(25,39) scale(.60)', fill: '#2C6FE8' },
  { t: 'translate(40,43) scale(.80)', fill: '#00AFDF' },
  { t: 'translate(54,39) scale(.55)', fill: '#8BC53F' },
  { t: 'translate(60,30) scale(.52)', fill: '#FFD200' },
  { t: 'translate(66,21) scale(.58)', fill: '#FFB400' },
  { t: 'translate(81,17) scale(.85)', fill: '#FF7E00' },
  { t: 'translate(96,21) scale(.70)', fill: '#ED2602' },
  { t: 'translate(102,30) scale(.95)', fill: '#EC0F6E' },
  { t: 'translate(66,39) scale(.55)', fill: '#FFB400' },
  { t: 'translate(81,43) scale(.80)', fill: '#FF7E00' },
  { t: 'translate(96,39) scale(.60)', fill: '#ED2602' },
] as const

export const IHMarkDefs = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <path
        id="ihstar"
        d="M0,-9.5 L2.2,-3 L9,-2.9 L3.5,1.2 L5.6,7.7 L0,3.8 L-5.6,7.7 L-3.5,1.2 L-9,-2.9 L-2.2,-3 Z"
      />
      <g id="ihmark">
        {STARS.map((star) => (
          <use key={star.t} href="#ihstar" transform={star.t} fill={star.fill} />
        ))}
      </g>
    </defs>
  </svg>
)

type IHMarkProps = {
  className?: string
  title?: string
}

export const IHMark = ({ className, title }: IHMarkProps) => (
  <svg
    viewBox="0 0 120 60"
    className={className}
    role={title ? 'img' : undefined}
    aria-label={title}
    aria-hidden={title ? undefined : true}
  >
    <use href="#ihmark" />
  </svg>
)
