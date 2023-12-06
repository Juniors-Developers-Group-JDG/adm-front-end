type BadgeVariant = 'green' | 'yellow' | 'red' | 'blue'

type BadgeStatusProps = {
  variant: BadgeVariant
}

const variants = {
  green: {
    title: 'Ativa',
    className: 'bg-secondary-900',
  },
  yellow: {
    title: 'Em andamento',
    className: 'bg-secondary-800',
  },
  red: {
    title: 'Encerrada',
    className: 'bg-secondary-700',
  },
  blue: {
    title: 'Preenchida',
    className: 'bg-secondary-600',
  },
}

export default function BadgeStatus({ variant = 'green' }: BadgeStatusProps) {
  const defaultClasses =
    'flex items-center justify-center rounded-lg  px-4 py-2 text-sm font-bold text-white'

  const { title, className } = variants[variant]

  return <span className={`${defaultClasses} ${className}`}>{title}</span>
}
