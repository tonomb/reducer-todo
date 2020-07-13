import React, {useState, useReducer} from 'react'

const initialFormValues = {
    title: '',
    completed: false,
    id: new Date()
}

function Navbar(props){
    const [formValues, setFormValues] = useState(initialFormValues)


    const changeHandler = (e) => {
        setFormValues({
            ...initialFormValues,
            title: e.target.value
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
            <button>Clear Completed</button>
        </div>
    )
}

export default Navbar;