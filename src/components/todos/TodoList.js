import React from 'react'
import TodoSummary from './TodoSummary'
import CreateTodo from './CreateTodo'

const TodoList = () => {
  return (
    <ul className="row">
      <TodoSummary />
      <CreateTodo />
    </ul>
  )
}

export default TodoList
