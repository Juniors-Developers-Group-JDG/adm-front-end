'use client'

type TextInputProps = {
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function TextInput({
  iconLeft,
  iconRight,
  label,
  ...props
}: TextInputProps) {
  const defaultInputClasses =
    'bg-primary-600 text-white outline-none  placeholder:text-[#c4c4c48f]'
  const defaultLabelClasses = 'text-md text-primary-200 '

  return (
    <div className="mb-6">
      <label className={defaultLabelClasses}>{label}</label>
      <div className="flex items-center justify-between rounded-sm border border-primary-500 bg-primary-600 p-4 text-white">
        <div className="flex items-center gap-2">
          {iconLeft && <div className="text-sub pl-2">{iconLeft}</div>}
          <input
            {...props}
            className={`${defaultInputClasses} ${iconLeft ? 'pl-2' : ''} ${
              iconRight ? 'pr-2' : ''
            }`}
          />
        </div>
        {iconRight && <div>{iconRight}</div>}
      </div>
    </div>
  )
}
