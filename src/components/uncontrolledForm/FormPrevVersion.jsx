function FormPrevVersion() {

  const submitHandler = (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData.get("name"));

    e.target.reset();
  };

  return (
    <div>
      <h2>Form Prev Version</h2>
      <form onSubmit={submitHandler} className="form">
        <input type="text" name="name" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default FormPrevVersion;

