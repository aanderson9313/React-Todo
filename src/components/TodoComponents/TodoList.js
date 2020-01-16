// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from './Todo';


const TodoList = props => {
    return (
        <div className = "To-do List">
            {props.list.map(task => (
                <Task key={task.id} task={task} toggleTask={props.toggleTask} />
            ))}

            <button onClick={props.clearTask}>Clear Task</button>
            
        </div>
    );
};

export default TodoList;