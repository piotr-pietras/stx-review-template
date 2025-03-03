import { useMutation, useQueryClient } from '@tanstack/react-query';
import { todoListQueryKeys } from './useGetTodoList';
import { getDb, updateDb } from './mockDb';

const changeDoneTodo = async (id: string) => {
  const todo = getDb().find((todo) => todo.id === id);
  if (!todo) {
    throw new Error('Todo not found');
  }
  todo.done = !todo.done; // toggle done status of the todo
  updateDb(todo);
  return getDb();
};

export const useChangeDone = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changeDoneTodo,
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: todoListQueryKeys.all });
    },
  });
};
