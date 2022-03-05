import { useEffect, useState } from 'react';
import './styles.scss';

export function EstadoDois(){
    const [visible, setVisible] = useState(true);
    const [coin, setCoin] = useState({});
    
    useEffect(()=>{
        async function getData(){
            const response = await fetch('https://blockchain.info/ticker');
            const data = await response.json();
            setCoin(data);
        }
        getData();
    }, [])

    return (
        <div className="container">
            <button onClick={() => setVisible(!visible)}>
                Ver informações.
            </button>

            <div className={visible ? 'invisible' : 'visible'}>
                {console.log(coin)}
                <p>{coin.BRL.last.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
            </div>
        </div>
    )
}