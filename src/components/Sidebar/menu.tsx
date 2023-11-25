import {
  Squares2X2Icon,
  BriefcaseIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  NewspaperIcon,
  UserPlusIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { ISidebarItems } from './types'

const iconSize = 24

export const menu: ISidebarItems[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <Squares2X2Icon width={iconSize} height={iconSize} />,
    route: '/admin/dashboard',
    subRoute: [],
  },
  {
    id: 2,
    name: 'Vagas',
    icon: <BriefcaseIcon width={iconSize} height={iconSize} />,
    route: '/admin/vacancies',
    subRoute: [
      {
        id: 1,
        name: 'Listagem de vagas',
        icon: <ClipboardDocumentIcon width={iconSize} height={iconSize} />,
        route: '/admin/vacancies/vacancies-list',
      },
      {
        id: 2,
        name: 'Candidatos',
        icon: <UserGroupIcon width={iconSize} height={iconSize} />,
        route: '/admin/vacancies/candidaties',
      },
    ],
  },
  {
    id: 3,
    name: 'Usuários',
    icon: <UsersIcon width={iconSize} height={iconSize} />,
    route: '/admin/users',
    subRoute: [],
  },
  {
    id: 4,
    name: 'Clientes',
    icon: <ChatBubbleLeftRightIcon width={iconSize} height={iconSize} />,
    route: '/admin/clients',
    subRoute: [],
  },
  {
    id: 5,
    name: 'Post',
    icon: <NewspaperIcon width={iconSize} height={iconSize} />,
    route: '/admin/posts',
    subRoute: [],
  },
  {
    id: 6,
    name: 'Voluntários',
    icon: <UserPlusIcon width={iconSize} height={iconSize} />,
    route: '/admin/volunteers',
    subRoute: [],
  },
]
