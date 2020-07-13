import React from 'react';
import moment from 'moment';

function Todo(props){
    

    const toggleCompleted =() =>{
        props.dispach({
            type: 'TOGGLE_COMPLETE',
            payload: {id: props.task.id}
        }) 
    }
    return(
        <div className='todo'
            onClick={toggleCompleted}>
            <h3 className={props.task.completed ? 'completed' : ''}>{props.task.title}</h3>
            { props.task.completed ? <p>{moment().format('ddd, h:mA')}</p> : ''}
        </div>
    )
}

export default Todo;