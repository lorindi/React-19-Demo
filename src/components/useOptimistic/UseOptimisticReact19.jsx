import { useActionState, useState, useOptimistic } from "react";

const createUniqueId = () => "1" + Math.random().toString(36);
console.log(createUniqueId());

const createTodo = (title) =>
  new Promise(resolve =>
    setTimeout(() => resolve({ id: createUniqueId(), title}),2000)
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
        return "Title is required";
      }
      setOptimisticTodos(prevTodos => [
        ...prevTodos,
        { title, id: createUniqueId(), pending: true  },
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
