import { TodoAdd } from "./features/todo/TodoAdd";
import { TodoList } from "./features/todo/TodoList";

function App() {
  return (
    <div>
      <TodoList />
      <TodoAdd />
    </div>
  );
}

export default App;
