import './GearItem.css';

function GearItem({ item, togglePacked }) {
  return (
    <div className="item-container">
      <div className="gear-item">{item.name}</div>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => togglePacked(item.id)}
      />
    </div>
  );
}

export default GearItem;
