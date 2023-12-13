'use client'
import { HiX } from 'react-icons/hi'

type BadgeStackProps = {
  title: string
  size?: 'default' | 'sm'
  showDeleteButton?: boolean
  onDeleteClick?: () => void
  width?: 'fit' | 'full'
}

const BadgeStack = ({
  title,
  size = 'default',
  showDeleteButton = false,
  onDeleteClick,
  width = 'full',
}: BadgeStackProps) => {
  const defaultClasses =
    'flex items-center justify-center gap-2.5 px-2 py-2 rounded-lg text-primary-900 bg-[#262626]'

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'text-sm border border-primary-400 rounded-sm'
      default:
        return 'text-base'
    }
  }

  const getWidthClass = () => {
    switch (width) {
      case 'fit':
        return 'w-fit'
      default:
        return 'w-full'
    }
  }

  return (
    <span className={`${defaultClasses} ${getSizeClass()} ${getWidthClass()}`}>
      {title}
      {showDeleteButton && (
        <button onClick={onDeleteClick}>
          <HiX />
        </button>
      )}
    </span>
  )
}

export default BadgeStack
