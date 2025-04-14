import GearItem from './GearItem';

function GearList({ gear }) {
  return gear.map((item) => <GearItem key={item.id} item={item} />);
}

export default GearList;
