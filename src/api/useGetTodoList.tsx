import { useQuery } from "@tanstack/react-query";
import { sleep } from "../utils/sleep";
import { getDb } from "./mockDb";

export const todoListQueryKeys = {
  all: ["todoList"],
};

const getTodoList = async () => {
  await sleep(2000);
  return getDb();
};

export const useGetTodoList = () => {
  return useQuery({
    queryKey: todoListQueryKeys.all,
    queryFn: getTodoList,
  });
};
