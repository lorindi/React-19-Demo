function FormReact19() {
  
  const formAction = (formData) => {
    console.log(formData.get("name"));
  };

  return (
    <div>
      <h2>Form React 19</h2>
      <form action={formAction}>
        <input type="text" name="name" />
        <button>Update</button>
      </form>
    </div>
  );
}

export default FormReact19;
