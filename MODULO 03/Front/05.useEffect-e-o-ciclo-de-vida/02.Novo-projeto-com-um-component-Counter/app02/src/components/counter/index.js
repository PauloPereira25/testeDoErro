import { useEffect, useState } from 'react';
import './style.css';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() =>{
       console.log('Montado...'); 


       return () => {
        console.log('Desmontagem...');
       }
    }, []);

    useEffect(() => {
        console.log('montagem inicial');
    }, []);

    useEffect(() => {
        console.log('Atualizando...');

        return () => {
            console.log('Desmontagem 2...');
        }
    }, [count]);

    return (
        <div className='container-counter'>
            <h1>{count}</h1>
            <button
              onClick={() => setCount(count +1)}
            >
              Incrementar
            </button>
            {console.log('Montagem...')}
        </div>
    )
}

export default Counter