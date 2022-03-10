let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    id: nextTodoId++,
    text
  }
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: {
    filter
  }
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: {
    id
  }
})
