import { useState } from "react";

const updateName = (name) =>
  new Promise((resolve) => setTimeout(() => resolve(name), 2000));

function UseTransitionPrevVersion() {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setIsPending(true);
    const result = await updateName(formData.get("name"));
    setIsPending(false);
    console.log(result);
    e.target.reset();
  };
  return (
    <>
      <h2>Use Transition Prev Version</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button disabled={isPending}>Update</button>
      </form>
    </>
  );
}

export default UseTransitionPrevVersion;
