import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

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
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {

    

    return (
      <div className = "App">
        <div className = "Header">
          <h2>Honey Do List!</h2>
          <TodoForm addTask = {this.addTask} />
        </div>
        <TodoList list={this.state.list} />
      </div>
    );
  };
};


export default App;
