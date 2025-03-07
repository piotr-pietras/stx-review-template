import { useQuery } from '@tanstack/react-query';
import { getDb } from './mockDb';
import { sleep } from '../utils/sleep';
import { useRef } from 'react';

export const todoListQueryKeys = {
  all: ['todoList'],
};

const getTodoList = async ({ initialFetch }: { initialFetch: boolean }) => {
  const sleepTime = initialFetch ? 2000 : 300;
  await sleep(sleepTime);
  return getDb();
};

export const useGetTodoList = () => {
  const isInitialQueryExecuted = useRef(false);

  return useQuery({
    queryKey: todoListQueryKeys.all,
    queryFn: async () => {
      if (!isInitialQueryExecuted.current) {
        isInitialQueryExecuted.current = true;
        return await getTodoList({ initialFetch: true });
      }
      return await getTodoList({ initialFetch: false });
    },
  });
};
