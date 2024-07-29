import { useTransition } from "react";
const updateName = (name) =>
  new Promise((resolve) => setTimeout(() => resolve(name), 2000));

function UseTransitionReact19() {
  const [isPending, startTransition] = useTransition();
  const formAction = (formData) => {
    startTransition(async () => {
      const result = await updateName(formData.get("name"));
      console.log(result);
    });
  };
  return (
    <div>
      <h2>Use Transition React 19</h2>
      <form action={formAction}>
        <input type="text" name="name" />
        <button disabled={isPending}>Update</button>
      </form>
    </div>
  );
}

export default UseTransitionReact19;
