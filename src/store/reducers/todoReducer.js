const initState = {
  todos: [
    {
      id: 's1',
      title: 'buy the milk',
      content:
        '完成個人網頁(首頁重做)https://s3.envato.com/files/257111114/Preview%20Image%20Set%20(v11%20Update)/Slide24.JPG',
      projectId: '1'
    },
    { id: 's2', title: 'listen English youtube video', content: 'blah blah blah', projectId: '1' },
    { id: 's3', title: 'play computer games', content: 'blah blah blah', projectId: '1' },
    { id: 's4', title: 'save computer data to disk', content: 'blah blah blah', projectId: '2' },
    { id: 's5', title: 'listen English music', content: 'blah blah blah', projectId: '3' }
  ]
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }
    case 'DELETE_TODO':
      const todos = state.todos.filter(todo => {
        return todo.id !== action.id
      })
      return {
        ...state,
        todos
      }
    default:
      return state
  }
}

export default todoReducer
