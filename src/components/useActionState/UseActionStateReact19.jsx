import { useActionState } from "react";

const updateName = (name) =>
  new Promise((resolve) => setTimeout(() => resolve(name), 2000));

function UseActionStateReact19() {
  const formHandler = async (previousState, formData) => {
    const result = await updateName(formData.get("name"));
    console.log(result);
    return null;
  };

  const [state, formAction, isPending] = useActionState(formHandler, {
    name: "",
  });

  // form action={formAction} or button formAction={formAction}
  return (
    <div>
      <h2>Use Action State React 19</h2>
      <form 
      // action={formAction}
      >
        <input type="text" name="name" />
        <button formAction={formAction} disabled={isPending}>Update</button>
      </form>
    </div>
  );
}

export default UseActionStateReact19;
