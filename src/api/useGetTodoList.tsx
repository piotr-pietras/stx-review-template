import { useQuery } from '@tanstack/react-query';
import { getDb } from './mockDb';

export const todoListQueryKeys = {
  all: ['todoList'],
};

const getTodoList = async () => {
  return getDb();
};

export const useGetTodoList = () => {
  return useQuery({
    queryKey: todoListQueryKeys.all,
    queryFn: getTodoList,
  });
};
