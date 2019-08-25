import React from 'react'
import TodoSummary from './TodoSummary'
import CreateTodo from './CreateTodo'

const TodoList = ({ todos, projectId }) => {
  return (
    <ul className="row">
      {todos && todos.map(todo => <TodoSummary todo={todo} key={todo.id} />)}
      <CreateTodo projectId={projectId} />
    </ul>
  )
}

export default TodoList
