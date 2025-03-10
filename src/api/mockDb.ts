import { Todo } from '../types/Todo';
import { v4 as uuid } from 'uuid';

let mockDb: Todo[] = [
  {
    id: uuid(),
    name: 'Finish writing and reviewing the report by Tomorrow',
    createdAt: new Date('2025-01-15:14:00'),
    done: true,
  },
  {
    id: uuid(),
    name: 'Buy vegetables, fruits, milk, and other essentials',
    createdAt: new Date('2025-01-16:00:00'),
    done: false,
  },
  {
    id: uuid(),
    name: 'Go for a run or do a home workout',
    createdAt: new Date('2025-01-17:00:00'),
    done: false,
  },
  {
    id: uuid(),
    name: 'Check in and catch up on the latest updates',
    createdAt: new Date('2025-01-15:14:00'),
    done: true,
  },
  {
    id: uuid(),
    name: 'Declutter desk and file important documents',
    createdAt: new Date('2025-01-16:14:00'),
    done: false,
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

export const updateDb = (todo: Todo) => {
  mockDb = mockDb.map((item) => (item.id === todo.id ? todo : item));
};
