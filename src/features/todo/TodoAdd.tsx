import { useState } from "react";
import { useAddTodo } from "../../api/useAddTodo";
import { v4 as uuidv4 } from "uuid";

export const TodoAdd = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const { mutate, isPending } = useAddTodo();
  const onSubmit = () => {
    mutate({ id: uuidv4(), name: name, text, createdAt: Date.now() });
  };

  const disabled = !text || !name;

  return (
    <div className="addContainer">
      <textarea
        disabled={isPending}
        placeholder="title"
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        disabled={isPending}
        placeholder="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={disabled || isPending} onClick={onSubmit}>
        {isPending ? "adding..." : "submit"}
      </button>
    </div>
  );
};
