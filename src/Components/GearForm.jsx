import { useState } from 'react';

function GearForm({ addItem }) {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.trim()) return;
    addItem(item.trim());
    setItem('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type item name"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
}

export default GearForm;
