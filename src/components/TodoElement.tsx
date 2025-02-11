import { useRemoveTodo } from "../api/useRemoveTodo";
import { Todo } from "../types/Todo";
import closeIcon from "/src/assets/close-outline.svg";

type Props = {
  item: Todo;
};

export const TodoElement = ({ item }: Props) => {
  const { mutate, isPending } = useRemoveTodo();

  return (
    <div className="todoContainer">
      {isPending && <div className="skeleton" />}
      <img
        className="icon"
        src={closeIcon}
        alt="x"
        onClick={() => {
          console.log("asd");
          mutate(item.id);
        }}
      />
      <h3>{item.name}</h3>
      <p>{item.text}</p>
    </div>
  );
};
