import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: "",
            id: Date.now(),
            completed: false
        };
    };

    handleChanges = event => {
        this.setState ({
            newTask: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.newTask);
        this.setState ({ newTask: '' });
    };

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <label className=" AddTask" htmlFor = 'task'>Add New Task</label>
                <input 
                type="text"
                name="task"
                
                onChange={this.handleChanges}
                />

                <button className= "add-button">Add</button>
            </form>
        )
    }



};

export default TodoForm;