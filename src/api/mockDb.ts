import { Todo } from "../types/Todo";
import { v4 as uuidv4 } from "uuid";

let mockDb: Todo[] = [
  {
    id: uuidv4(),
    name: "Testowy 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: Date.now(),
  },
  {
    id: uuidv4(),
    name: "Testowy 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: Date.now(),
  },
  {
    id: uuidv4(),
    name: "Testowy 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
