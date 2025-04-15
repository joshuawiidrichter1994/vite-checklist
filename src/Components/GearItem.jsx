import './GearItem.css';

function GearItem({ item }) {
  return (
    <div className="item-container">
      <div className="gear-item">{item.name}</div>
      <div className="check-box">
        <div className="checked"></div>
        <div className="unchecked"></div>
      </div>
    </div>
  );
}

export default GearItem;
