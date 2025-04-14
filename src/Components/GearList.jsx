import GearItem from './GearItem';

function GearList({ gear }) {
  return (
    <div>
      <GearItem gear={gear} />
    </div>
  );
}

export default GearList;
