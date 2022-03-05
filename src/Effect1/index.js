import { useState } from 'react';
import { Produtos } from '../components/Produtos';
import './styles.scss';

export function ConditionalRender(){

    const [ativo, setAtivo] = useState(false);

    return (
        <div className="container">
            <button onClick={()=> setAtivo(!ativo)}>
                Clique para ver o produto
            </button>
            {ativo && <Produtos />}
        </div>
    )
}