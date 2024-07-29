import { useFormStatus } from "react-dom";

const updateName = (name) =>
  new Promise((resolve) => setTimeout(() => resolve(name), 2000));

function Submit() {
  const {pending, data, method, action} = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      Update
    </button>
  );
}

function UseFormStatusReact19() {

  const formAction = async (formData) => {
    const result = await updateName(formData.get("name"));
    
    console.log(result);
  };
  return (
    <div>
      <h2>Use Form Status React 19</h2>
      <form action={formAction}>
        <input type="text" name="name" />
        <Submit />
      </form>
    </div>
  );
}

export default UseFormStatusReact19;
