import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'

import SidebarMobile from '../shared/SidebarMobile'

interface TopbarProps {
  sectionName: string
  isOpen: boolean
}

export default function Topbar({ sectionName, isOpen }: TopbarProps) {
  const [expandSidebar, setExpandSidebar] = useState(false)
  return (
    <header
      className={`flex w-full items-center gap-3 border-b border-b-primary-400 bg-primary-700 p-4 text-zinc-50 sm:p-10 md:h-[146px] ${isOpen ? 'sm:ml-[275px]' : 'sm:ml-[122px]'
        }`}
    >
      <Bars3Icon
        width={25}
        height={25}
        className="sm:hidden"
        onClick={() => setExpandSidebar(!expandSidebar)}
      />
      <h1 className="text-2xl sm:text-3xl">{sectionName}</h1>
      {expandSidebar && (
        <SidebarMobile
          onClose={() => setExpandSidebar(false)}
          isExpanded={expandSidebar}
        />
      )}
    </header>
  )
}
