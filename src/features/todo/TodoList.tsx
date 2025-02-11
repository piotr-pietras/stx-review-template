import { useGetTodoList } from "../../api/useGetTodoList";
import { TodoElement } from "../../components/TodoElement";

export const TodoList = () => {
  const { data, isLoading } = useGetTodoList();

  if (isLoading) {
    return <p className="label">Loading ...</p>;
  }

  return (
    <>
      {data?.map((item) => (
        <TodoElement key={item.id} item={item} />
      ))}
    </>
  );
};
