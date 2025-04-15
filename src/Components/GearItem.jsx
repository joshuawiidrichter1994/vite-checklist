import './GearItem.css';

function GearItem({ item }) {
  return (
    <div className="item-container">
      <div className="gear-item">{item.name}</div>
      <div className="check-box"></div>
    </div>
  );
}

export default GearItem;
