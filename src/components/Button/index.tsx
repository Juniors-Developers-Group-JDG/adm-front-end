'use client'

type ButtonVariants = 'primary'

type ButtonProps = {
  variant?: ButtonVariants
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

// Isso pode mudar de acordo com o design
const variants = {
  primary:
    'border border-primary-900 bg-primary-300  hover:opacity-[0.9] text-white',
}

export default function Button({
  variant = 'primary',
  children,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) {
  const defaultClasses =
    'flex items-center px-2 py-4 justify-center gap-4 font-semibold'

  return (
    <button
      {...props}
      className={`${defaultClasses} ${variants[variant]} ${props.className}`}
    >
      {iconLeft && <div>{iconLeft}</div>}
      {children}
      {iconRight && <div>{iconRight}</div>}
    </button>
  )
}
