import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 0,
    label: 'ПАНЕЛЬ ВИКЛАДАЧА',
    isTitle: true,
  },
  {
    id: 2,
    label: 'МЕНЮ',
    icon: 'bx bx-list-ul',
    link: '/learning/instructors-list',
    parentId: 34,
  },
  {
    id: 4,
    label: 'Чат',
    icon: 'ph-chats',
    link: '/apps/chat',
    parentId: 8,
  },
];
