import { useActionState, useState, useOptimistic } from "react";
// import uniqid from "uniqid";

const createUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);

const createTodo = (title) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: createUniqueId(), title: "" }))
  );

function UseOptimisticReact19() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Clean" },
    { id: 2, title: "Study" },
  ]);

  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);

  const [error, formAction, isPending] = useActionState(
    async (previousState, formData) => {
      const title = formData.get("name");

      if (!title) {
        return "Title ir required";
      }
      setOptimisticTodos((prevTodos) => [
        ...prevTodos,
        { title: title + '...', id: createUniqueId() },
      ]);

      const newTodo = await createTodo(title);

      setTodos((prevTodos) => [...prevTodos, newTodo]);

      return null;
    },
    null
  );

  return (
    <div>
      <h2>Use Optimistic React 19</h2>
      <form action={formAction}>
        <input type="text" name="name" />
        <button type="submit" disabled={isPending}>
          Add
        </button>
      </form>
      {error && <p>{error}</p>}
      <ul>
        {optimisticTodos.map((todo) => (
          <li key={todo.id} style={todo.pending && { color: "gray" }}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseOptimisticReact19;
