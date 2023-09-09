import { v4 as uuid } from 'uuid';
export const dataDummy = [
  {
    id: uuid(),
    title: 'Todo',
    tasks: [
      {
        id: uuid(),
        title: 'Learn Js',
      },
      {
        id: uuid(),
        title: 'Learn React',
      },
      {
        id: uuid(),
        title: 'Learn Git',
      },
    ],
  },
  {
    id: uuid(),
    title: 'In Progress',
    tasks: [
      {
        id: uuid(),
        title: 'Learn HTML',
      },
      {
        id: uuid(),
        title: 'Learn CSS',
      },
      {
        id: uuid(),
        title: 'Learn SASS',
      },
    ],
  },
  {
    id: uuid(),
    title: 'Completed',
    tasks: [
      {
        id: uuid(),
        title: 'Learn FLutter',
      },
      {
        id: uuid(),
        title: 'Learn Android',
      },
      {
        id: uuid(),
        title: 'Learn Kotlin',
      },
    ],
  },
];
