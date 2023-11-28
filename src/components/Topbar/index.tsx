import React from 'react'
import Search from '../shared/Search'

interface TopbarProps {
  sectionName: string
}

export default function Topbar({ sectionName }: TopbarProps) {
  return (
    <header className="w-full border-b border-b-primary-400 bg-primary-700 p-10 text-zinc-50 md:h-[146px]">
      <h1 className="text-2xl sm:text-3xl">{sectionName}</h1>
    </header>
  )
}
