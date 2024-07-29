import { useState } from "react";

const updateName = (name) =>
  new Promise((resolve) => setTimeout(() => resolve(name), 2000));

function Submit({ pending }) {
  return (
    <button type="submit" disabled={pending}>
      Update
    </button>
  );
}
function UseFormStatusPrevVersion() {
  const [pending, setPending] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    setPending(true);
    const result = await updateName(formData.get("name"));
    setPending(false);
    
    console.log(result);
    e.target.reset();
  };
  return (
    <div>
      <h2>Use Form Status Prev Version</h2>
      <form onSubmit={submitHandler}>
        <input type="text" name="name" />
        <Submit pending={pending} />
      </form>
    </div>
  );
}

export default UseFormStatusPrevVersion;
