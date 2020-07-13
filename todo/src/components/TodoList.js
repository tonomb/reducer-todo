import React, {useState, useReducer} from 'react'

import Todo from './Todo'


function TodoList(props){
    
    return(
        <div className='todo-list'>
            {
                props.tasks.map(task =>{
                    return <Todo key={task.id} task={task} />
                })
            }
        </div>
    )
}

export default TodoList;