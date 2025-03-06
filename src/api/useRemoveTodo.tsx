import { useMutation, useQueryClient } from '@tanstack/react-query';
import { todoListQueryKeys } from './useGetTodoList';
import { getDb, removeDb } from './mockDb';

const removeTodo = async (id: string) => {
  removeDb(id);
  return getDb();
};

export const useRemoveTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeTodo,
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: todoListQueryKeys.all });
    },
  });
};
