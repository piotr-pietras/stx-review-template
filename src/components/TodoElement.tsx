import { useRemoveTodo } from "../api/useRemoveTodo";
import closeIcon from "/src/assets/close-outline.svg";

type Props = {
  item: { name: string; text: string; createdAt: number };
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
          mutate(item.id);
        }}
      />
      <h3>{item.name}</h3>
      <p>{item.text}</p>
    </div>
  );
};
