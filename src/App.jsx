import { useState } from 'react';
import GearList from './Components/GearList';
import GearForm from './Components/GearForm';

import './App.css';

function App() {
  const [gear, setGear] = useState([
    'knife',
    'water filter',
    'cookset',
    'shelter',
    'carbine',
  ]);

  const addItem = (item) => {
    setGear(gear.append(item));
  };

  return (
    <div>
      <GearForm gear={gear} addItem={addItem} />
      <GearList gear={gear} />
    </div>
  );
}

export default App;
