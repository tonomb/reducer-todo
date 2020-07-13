import React from 'react';

function Todo(props){
    

    const toggleCompleted =() =>{
        props.dispach({
            type: 'TOGGLE_COMPLETE',
            payload: props.task.id
        }) 
    }
    return(
        <div className='todo'
            onClick={toggleCompleted}>
            <h3 className={props.task.completed ? 'completed' : ''}>{props.task.title}</h3>
        </div>
    )
}

export default Todo;