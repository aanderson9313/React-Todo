import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';


const data = 
[
    {
        task: 'Dishes',
        id:1579148176891,
        completed: false
    },

    {
        task: 'Fold Laundry',
        id:1579148176892,
        completed: false
    },

    {
        task: 'Grocery Shopping',
        id:1579148176893,
        completed: false
    },

    {
        task: 'Make Dinner',
        id:1579148176894,
        completed: false
    },

    {
        task: 'bedtime routine for kids',
        id:1579148176895,
        completed: false
    }
];

class App extends React.Component {

  // constructor with state
  constructor() {
    super();
    // initialize the state object
    this.state = {
      list: data
    };
  }

  addTask = taskName => {
    const newTask = {
      task: taskName, 
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newTask]
    });
  };

  toggleTask = id => {
    this.setState({
      list: this.state.list.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        };
      })
    });
  }


  clearTask = event => {
    event.preventDefault();
    this.setState({
      list: this.state.list.filter(task => {
        return !task.completed
      })
    });
  };
  
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {

    

    return (
      <div className = "App">
        <div className = "Header">
          <h2>Honey Do List!</h2>
          <TodoForm className = "AddTask" clearTask={this.clearTask} addTask = {this.addTask} />
        </div>
        <TodoList toggleTask={this.toggleTask} list={this.state.list} clearTask={this.clearTask} />
      </div>
    );
  };
};


export default App;
