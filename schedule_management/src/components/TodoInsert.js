import { IoAddOutline } from "react-icons/io5";
import './TodoInsert.css';
import {useState, useCallback} from 'react';

const TodoInsert=({onInsert})=>{
    const [value, setValue] =useState('');

    const onChange=useCallback(e =>{
        setValue(e.target.value);
    }, []);

    const onSubmit=useCallback(e =>{
        onInsert(value);
        setValue('');

        e.preventDefault();
    }, [onInsert, value],
    );

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input  placeholder="할 일을 입력하세요" value={value} onChange={onChange}/>
            <button type="submit">
                <IoAddOutline />
            </button>
        </form>
    );
};

export default TodoInsert;