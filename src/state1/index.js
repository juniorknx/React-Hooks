import './styles.scss';
import { useState } from "react"

export function StateOne() {

    const [counter, setCounter] = useState(0);
    const [active, setActive] = useState(true);

    function handleCounter(){
        setCounter( counter + 1)
    }

    function handleSubtrair(){
        setCounter( counter -1 )
    }

    function handleZero(){
        setCounter(0)
    }

    if(counter === -1){
        setCounter(0)
    }

    return (
        <div className="container">
            <button onClick={handleCounter}>
                Somar +
            </button>

            <button onClick={handleSubtrair}>
                Subtrair -
            </button>

            <button onClick={handleZero}>
                Zerar
            </button>

            <button className={ active ? 'ativo' : 'inativo'} onClick={()=> setActive(!active)}>
                Toggle Button
            </button>

            <p>{counter}</p>
        </div>
    )
}