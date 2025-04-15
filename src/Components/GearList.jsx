import GearItem from './GearItem';

function GearList({ gear, togglePacked }) {
  return gear.map((item) => (
    <GearItem key={item.id} item={item} togglePacked={togglePacked} />
  ));
}

export default GearList;
