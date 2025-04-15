import './GearItem.css';

function GearItem({ item, togglePacked, deleteItem }) {
  return (
    <div className="item-container">
      <div className="gear-item">{item.name}</div>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => togglePacked(item.id)}
      />
      <button className="delete-btn" onClick={() => deleteItem(item.id)}>
        🗑️
      </button>
    </div>
  );
}

export default GearItem;
