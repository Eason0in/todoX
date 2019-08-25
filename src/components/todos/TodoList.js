import React from 'react'
import TodoSummary from './TodoSummary'
import CreateTodo from './CreateTodo'

const TodoList = ({ todos, project }) => {
  return (
    <ul className="row">
      {todos && todos.map(todo => <TodoSummary todo={todo} key={todo.id} />)}
      <CreateTodo project={project} />
    </ul>
  )
}

export default TodoList
