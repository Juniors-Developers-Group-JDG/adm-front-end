'use client'

import Sidebar from '../Sidebar'
import Topbar from '../Topbar'

export default function AdminContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidebar />
      <section className="w-full">
        <Topbar />
        <main className="h-full bg-primary-700 p-8 text-zinc-50">
          {children}
        </main>
      </section>
    </div>
  )
}
