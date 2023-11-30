'use client'

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
  return (
    <div className="flex">
      <Sidebar />
      <section className="w-full">
        <Topbar sectionName={sectionName} />
        <main className="h-full bg-primary-700 p-8 text-zinc-50">
          {children}
        </main>
      </section>
    </div>
  )
}
