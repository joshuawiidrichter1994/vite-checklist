import { useState } from 'react';
import GearItem from './Components/GearItem';

import './App.css';

function App() {
  const [gear, setGear] = useState([]);

  return (
    <>
      <div>
        <GearItem />
      </div>
    </>
  );
}

export default App;
