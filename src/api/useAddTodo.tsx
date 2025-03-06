import { useMutation, useQueryClient } from '@tanstack/react-query';
import { todoListQueryKeys } from './useGetTodoList';
import { getDb, pushDb } from './mockDb';
import { Todo } from '../types/Todo';

const addTodo = async (todo: Todo) => {
  pushDb(todo);
  return getDb();
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: todoListQueryKeys.all });
    },
  });
};
