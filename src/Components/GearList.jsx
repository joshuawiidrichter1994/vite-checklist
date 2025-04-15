import GearItem from './GearItem';

function GearList({ gear, togglePacked, deleteItem }) {
  return gear.map((item) => (
    <GearItem
      key={item.id}
      item={item}
      togglePacked={togglePacked}
      deleteItem={deleteItem}
    />
  ));
}

export default GearList;
