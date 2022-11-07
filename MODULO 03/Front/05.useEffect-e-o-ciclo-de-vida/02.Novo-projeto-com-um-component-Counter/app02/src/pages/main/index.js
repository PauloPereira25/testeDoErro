import { useState } from 'react';
import Counter from '../../components/counter';
import './style.css';

function Main() {
  const [showCount, setShowCount] = useState(false)

  return (
    <div className="container">
     <button 
      onClick={() => setShowCount(!showCount)
      }>
      Exibir/Ocultar
    </button>
     {showCount && <Counter />}
     {/* <Counter /> */}
    </div>
  );
}

export default Main;
