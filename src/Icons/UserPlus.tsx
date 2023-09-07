type UserPlusProps = {
  width?: string
  height?: string
  currentColor?: string
}

export const UserPlus = ({
  width = '32',
  height = '32',
  currentColor = 'black',
}: UserPlusProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={currentColor}
      viewBox="0 0 256 256"
    >
      <path d="M256,136a12,12,0,0,1-12,12h-8v8a12,12,0,0,1-24,0v-8h-8a12,12,0,0,1,0-24h8v-8a12,12,0,0,1,24,0v8h8A12,12,0,0,1,256,136Zm-54.81,56.28a12,12,0,1,1-18.38,15.44C169.12,191.42,145,172,108,172c-28.89,0-55.46,12.68-74.81,35.72a12,12,0,0,1-18.38-15.44A124.08,124.08,0,0,1,63.5,156.53a72,72,0,1,1,89,0A124,124,0,0,1,201.19,192.28ZM108,148a48,48,0,1,0-48-48A48.05,48.05,0,0,0,108,148Z"></path>
    </svg>
  )
}
