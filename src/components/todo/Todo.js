import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      textDecoration: ''
    }
  }

  handleClick = () => {
    if (this.state.checked) {
      this.setState({checked: false, textDecoration: ''})
    } else {
      this.setState({checked: true, textDecoration: 'line-through'})
    }
  }

  render() {
    return(
      <div>
        <input id={`todo-${this.props.id}-checkbox`} type="checkbox" onClick={this.handleClick}/>
        <span id={`todo-${this.props.id}-text`} style={{textDecoration: this.state.textDecoration}}>{this.props.text}</span>
      </div>
    )
  }
}

export default Todo
