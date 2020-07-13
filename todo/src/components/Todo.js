import React, {useState} from 'react';

function Todo(props){
    const [completed, setCompleted] = useState(false)

    const toggleCompleted =() =>{
        
    }

    return(
        <div className='todo'
            onClick={toggleCompleted}>
            <h3 className={completed ? 'completed' : ''}>{props.task.title}</h3>
        </div>
    )
}

export default Todo;