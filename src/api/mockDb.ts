import { Todo } from '../types/Todo';
import { v4 as uuid } from 'uuid';

let mockDb: Todo[] = [
  {
    id: uuid(),
    name: 'Finish writing and reviewing the report by Tomorrow',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Buy vegetables, fruits, milk, and other essentials',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Go for a run or do a home workout',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Check in and catch up on the latest updates',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Declutter desk and file important documents',
    createdAt: Date.now(),
  },
];

export const getDb = () => {
  return mockDb;
};

export const pushDb = (todo: Todo) => {
  mockDb = [...mockDb, todo];
};

export const removeDb = (id: string) => {
  mockDb = mockDb.filter((todo) => todo.id !== id);
};
