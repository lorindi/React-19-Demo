import { useState } from "react";
import { useForm } from "../../hooks/useForm";

const updateName = (name) =>
  new Promise((resolve) => setTimeout(() => resolve(name), 2000));

function UseActionStatePrevVersion() {
  const [isPending, setIsPending] = useState(false);

  const formHandler = (e) => {
    setIsPending(true);
    const result = updateName(values.name);
    setIsPending(false);
  };
  const { values, submitHandler, changeHandler } = useForm(formHandler, {
    name: "",
  });

  return (
    <div>
      <h2>Use Action State Prev Version</h2>
      <form onSubmit={submitHandler}>
        <input type="text" value={values.name} onChange={changeHandler} />
        <button type="submit" disabled={isPending}>
          Update
        </button>
      </form>
    </div>
  );
}

export default UseActionStatePrevVersion;
