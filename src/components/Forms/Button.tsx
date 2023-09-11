type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'base' | 'border'
}

export const Button = ({ variant = 'base', ...props }: ButtonBaseProps) => {
  const styleButton = variant === 'base' ? 'btn-base' : 'btn-border'
  return (
    <button {...props} className={`${styleButton} ${props.className}`}>
      {props.children}
    </button>
  )
}
