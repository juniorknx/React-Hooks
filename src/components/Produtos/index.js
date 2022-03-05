import { useEffect } from 'react';
import './styles.scss';

export function Produtos(){

    useEffect(()=>{
        console.log('Renderizei');

        return () => console.clear();
    }, [])

    return (
        <div className='container'>
            <h3>Camiseta Vans</h3>
            <p>Camiseta Azul TAM - M</p>
            <span>R$ 139,90</span>
        </div>
    )
}