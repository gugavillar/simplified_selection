type SignOutProps = {
  width?: string
  height?: string
  currentColor?: string
}

export const SignOut = ({
  width = '32',
  height = '32',
  currentColor = 'white',
}: SignOutProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={currentColor}
      viewBox="0 0 256 256"
    >
      <path d="M116,216a12,12,0,0,1-12,12H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28h56a12,12,0,0,1,0,24H52V204h52A12,12,0,0,1,116,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L187,116H104a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,224.49,119.51Z"></path>
    </svg>
  )
}
