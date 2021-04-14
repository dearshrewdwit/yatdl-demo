import React, { Component } from 'react'
import Todo from './Todo'
import Heading from './Heading'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
  }

  saveTask = () => {
    const el = document.getElementById('todo-textbox')
    const newTodos = this.state.todos
    newTodos.push(el.value)
    this.setState({todos: newTodos})
  }

  clearTasks = () => {
    this.setState({todos: []})
  }

  render() {
    return(
      <div>
        <Heading text="Yet Another Todo List!" />
        <input id="todo-textbox" type="text"/>
        <button id="todo-save-button" onClick={this.saveTask}>Save</button>
        <a href="#" id="todo-clear" onClick={this.clearTasks}>clear</a>
        {this.state.todos.map((todo, index) => <Todo id={index} key={index} text={todo}/>)}
      </div>
    )
  }
}

export default TodoList
