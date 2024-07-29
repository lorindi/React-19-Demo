import { useActionState, useState } from "react";

const createUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

const createTodo = (title) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: createUniqueId(), title}))
  );

function UseOptimisticPresVersion() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Clean" },
    { id: 2, title: "Study" },
  ]);

  const [error, formAction, isPending] = useActionState(
    async (previousState, formData) => {
      const title = formData.get("name");

      if (!title) {
        return "Title ir required";
      }

      const newTodo = await createTodo(title);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      return null;
    },
    null
  );

  return (
    <div>
      <h2>UseOptimisticPresVersion</h2>
      <form action={formAction}>
        <input type="text" name="name" />
        <button type="submit" disabled={isPending}>
          Add
        </button>
      </form>
      {error && <p>{error}</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={todo.pending && { color: "green" }}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseOptimisticPresVersion;
