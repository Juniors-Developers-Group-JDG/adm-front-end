'use client'

import { useState } from 'react'
import Sidebar from '../Sidebar'
import Topbar from '../Topbar'

interface AdminContainerProps {
  children: React.ReactNode
  sectionName: string
}

export default function AdminContainer({
  children,
  sectionName,
}: AdminContainerProps) {
  const [isExpandedSidebar, setIsExpandedSidebar] = useState(true)
  return (
    <div className="flex h-full">
      <Sidebar isOpen={isExpandedSidebar} setIsOpen={setIsExpandedSidebar} />
      <section className="h-full w-full overflow-x-hidden">
        <Topbar isOpen={isExpandedSidebar} sectionName={sectionName} />
        <main className="h-full p-8 text-zinc-50">{children}</main>
      </section>
    </div>
  )
}
