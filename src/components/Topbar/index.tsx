import React from 'react'
import Search from '../shared/Search'

export default function Topbar() {
  return (
    <header className="w-full border-b border-b-primary-400 p-10 md:h-[146px]">
      <Search className="w-full max-w-[580px]" />
    </header>
  )
}
