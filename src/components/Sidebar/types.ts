import { ReactNode } from 'react'

export interface ISubItem {
  id: number
  name: string
  icon: ReactNode
  route: string
}

export interface ISidebarItems {
  id: number
  name: string
  icon: ReactNode
  route: string
  subRoute: ISubItem[]
}
