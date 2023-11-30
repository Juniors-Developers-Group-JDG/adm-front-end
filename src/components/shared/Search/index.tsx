import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { type InputHTMLAttributes } from 'react'

type SearchProps = InputHTMLAttributes<HTMLInputElement>

export default function Search({
  onChange,
  placeholder,
  className,
}: SearchProps) {
  return (
    <div
      className={`flex w-full items-center rounded-lg border border-[#393939] bg-[#232323] px-6 py-4 ${className}`}
    >
      <MagnifyingGlassIcon color="#fafafa" width={16} height={16} />
      <div className="w-full">
        <label htmlFor="input-search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="input-search"
          className="w-full border-none bg-[#232323] pl-2.5 text-zinc-50  outline-none ring-0 placeholder:text-zinc-50 focus:border-none focus:outline-none focus:ring-0"
          placeholder={placeholder || 'Pesquisar...'}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
