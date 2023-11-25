import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useState } from 'react'
import { ISidebarItems } from './types'
import { usePathname } from 'next/navigation'

interface SubItemProps {
  item: ISidebarItems
  isExpanded: boolean
}

export default function SidebarItem({ item, isExpanded }: SubItemProps) {
  const [collapseItem, setCollapseItem] = useState(false)
  const pathname = usePathname()
  const iconSize = 24

  const renderSubItems = () => {
    return item.subRoute.map((subItem) => (
      <li
        key={subItem.id}
        className={`flex w-full items-center gap-4 py-4 transition-all duration-700 ease-in-out ${subItem.route === pathname ? 'text-primary-900' : 'text-zinc-50'
          }`}
      >
        <span>{subItem.icon}</span>
        {isExpanded && <p className="text-sm">{subItem.name}</p>}
      </li>
    ))
  }

  return (
    <div key={item.id} className="w-full">
      {item.subRoute.length ? (
        <button
          onClick={() => setCollapseItem(!collapseItem)}
          className={`flex w-full flex-col justify-between gap-4 p-4 transition-all duration-700 ease-in-out
            ${pathname.includes('vacancies')
              ? 'rounded-lg bg-[#232323] font-bold text-primary-900'
              : 'text-zinc-50'
            }`}
        >
          <div className="flex w-full items-center justify-between">
            {' '}
            <article className="flex items-center gap-4">
              <span>{item.icon}</span>
              {isExpanded && <p className="text-sm">{item.name}</p>}
            </article>
            {isExpanded && item.subRoute.length ? (
              <ChevronDownIcon
                color={`#fafafa`}
                width={iconSize}
                height={iconSize}
                className="text-right"
              />
            ) : null}
          </div>
          {collapseItem && (
            <ul className="flex w-full flex-col text-left">
              {renderSubItems()}
            </ul>
          )}
        </button>
      ) : (
        <Link
          href={item.route}
          key={item.id}
          className={`flex w-full items-center justify-between gap-4 p-4 transition-all duration-700 ease-in-out
            ${item.route === pathname
              ? 'rounded-lg bg-[#232323] font-bold text-primary-900'
              : 'text-zinc-50'
            }`}
        >
          <article className="flex items-center gap-4">
            <span>{item.icon}</span>
            {isExpanded && <p className="text-sm">{item.name}</p>}
          </article>
        </Link>
      )}
    </div>
  )
}
