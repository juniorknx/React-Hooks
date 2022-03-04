import { useRef, useState } from 'react';
import './styles.scss';

export default function SecondState() {

    const [todo, setTodo] = useState([]);
    const todoItem = useRef();

    function handleTodo(){
        setTodo([...todo, todoItem.current.value]);
        if(todoItem.current.value === ''){
            return 0;
        }
        todoItem.current.value = '';
    }

    function handleRemoveItem(){
        setTodo([]);
    }

    return (
        <>
            <div className='container'>
                <input
                    type="text"
                    placeholder='Item'
                    ref={todoItem}
                />

                <button onClick={handleTodo}>
                    Adicionar
                </button>

                <button onClick={handleRemoveItem}>
                    Remover Item
                </button>
            </div>

            <div className='todos'>
                {todo.map((item)=> {
                    return (
                        <li key={item}>{item}</li>
                    )
                })}
            </div>
        </>
    )
}