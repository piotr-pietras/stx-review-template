import { useState } from "react";
import { useAddTodo } from "../../api/useAddTodo";
import { v4 as uuidv4 } from "uuid";

export const TodoAdd = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const { mutate, isPending, isSuccess } = useAddTodo();
  const onSubmit = () => {
    mutate({ id: uuidv4(), name: name, text, createdAt: Date.now() });
  };

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
      <button
        disabled={!text || !name || isPending || isSuccess}
        onClick={onSubmit}
      >
        {isPending ? "adding..." : "submit"}
      </button>
    </div>
  );
};
