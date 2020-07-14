import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const initialFormValues = {
    title: '',
    completed: false,
    id: uuidv4()
}

function Navbar(props){
    const [formValues, setFormValues] = useState(initialFormValues)


    const changeHandler = (e) => {
        setFormValues({
            ...initialFormValues,
            title: e.target.value,
            id:uuidv4()
        });
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.dispach({
            type: 'NEW_TODO',
            payload: formValues
        })
        setFormValues(initialFormValues)
    }

    const clearCompleted = () => {
        props.dispach({
            type: 'CLEAR_COMPLETED'
        })
    }


    return(
        <div className='navbar'>
            <form onSubmit={submitHandler} >
                <input 
                type='text'
                value={formValues.title}
                onChange={changeHandler}
                ></input>
                <button >Add Todo</button>
            </form>
            <button onClick={clearCompleted} className='clear-btn'>Clear Completed</button>
        </div>
    )
}

export default Navbar;