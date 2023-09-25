type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'base' | 'border'
  isLoading?: boolean
}

const Loader = () => (
  <div
    className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-matisse-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status"
  >
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      Loading...
    </span>
  </div>
)

export const Button = ({
  variant = 'base',
  isLoading,
  ...props
}: ButtonBaseProps) => {
  const styleButton = variant === 'base' ? 'btn-base' : 'btn-border'
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`${styleButton} ${props.className}`}
    >
      {isLoading ? <Loader /> : null} {props.children}
    </button>
  )
}
