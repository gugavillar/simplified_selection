type GaugeProps = {
  width?: string
  height?: string
  currentColor?: string
}

export const Gauge = ({
  width = '32',
  height = '32',
  currentColor = 'white',
}: GaugeProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={currentColor}
      viewBox="0 0 256 256"
    >
      <path d="M209.88,77.83A115.19,115.19,0,0,0,128,44h-.41C63.85,44.22,12,96.76,12,161.13V184a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V160A115.25,115.25,0,0,0,209.88,77.83ZM220,180H127.32l46.44-65A12,12,0,1,0,154.24,101L97.82,180H36V161.13c0-1.72,0-3.43.14-5.13H56a12,12,0,0,0,0-24H40.62c10.91-33.39,40-58.52,75.38-63.21V88a12,12,0,0,0,24,0V68.8A92,92,0,0,1,215.66,132H200a12,12,0,0,0,0,24h19.9c.06,1.33.1,2.66.1,4Z"></path>
    </svg>
  )
}
