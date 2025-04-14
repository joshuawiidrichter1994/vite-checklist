import { useState } from 'react';
import GearList from './Components/GearList';
import GearForm from './Components/GearForm';

import './App.css';

function App() {
  const [gear, setGear] = useState(['gear item 1']);

  return (
    <div>
      <GearForm gear={gear} />
      <GearList gear={gear} />
    </div>
  );
}

export default App;
