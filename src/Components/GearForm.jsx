function GearForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit="handleSubmit">
        <input placeholder="Type item name" type="text" />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
}

export default GearForm;
