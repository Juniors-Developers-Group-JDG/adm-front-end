import Image from 'next/image'
import React, { useRef } from 'react'
import JDGMobile from '@/assets/jdg-mobile.png'
import {
  UserIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SidebarItem from '@/components/Sidebar/SidebarItem'
import { menu } from '@/components/Sidebar/menu'
import useOutsideClick from '@/hooks/useOutsideClick'

interface SidebarProps {
  isExpanded: boolean
  onClose: () => void
}

export default function SidebarMobile({ isExpanded, onClose }: SidebarProps) {
  const ref = useRef(null)
  const pathname = usePathname()
  const iconSize = 24

  useOutsideClick(ref, onClose)

  return (
    <aside
      ref={ref}
      className={`absolute left-0 top-0 z-50 flex-col border-r border-r-primary-400 bg-primary-700 px-4 py-10 transition-all duration-500 ease-in-out sm:hidden ${isExpanded ? 'w-[200px]' : 'w-[122px] items-center'
        }`}
    >
      <figure className={`mb-20 flex items-center gap-6`}>
        <Image alt="Jdg mobile logo" width={70} height={70} src={JDGMobile} />
        <p
          style={{ transition: 'opacity 0.5s ease-in-out' }}
          className={`text-center text-xs font-bold text-zinc-50 transition-all duration-700 ease-in-out ${isExpanded ? 'block' : 'hidden'
            }`}
        >
          Juniors Developers Group
        </p>
      </figure>
      <p className="mb-8 px-4 font-medium uppercase text-[#8b8b8b]">Menu</p>
      <ul
        className={`flex flex-col space-y-3 
        ${isExpanded ? 'items-start' : 'items-center'}`}
      >
        {menu.map((item) => (
          <SidebarItem key={item.id} item={item} isExpanded={isExpanded} />
        ))}
      </ul>
      <ul className="mb-10 mt-[40px]">
        <Link
          href={'/admin/user'}
          className={`mb-4 flex items-center gap-4 p-4 text-sm
            ${
            pathname === '/admin/user'
              ? 'rounded-lg bg-[#232323] font-bold text-primary-900'
              : 'text-zinc-50'
            }
            `}
        >
          <UserIcon width={iconSize} height={iconSize} />
          {isExpanded && <p>Admin</p>}
        </Link>
        <span className="mb-10 flex items-center gap-4 p-4 text-sm text-zinc-50">
          <ArrowRightOnRectangleIcon width={iconSize} height={iconSize} />
          {isExpanded && <p>Sair</p>}
        </span>
      </ul>
    </aside>
  )
}
