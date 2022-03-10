import undoable from 'redux-undo'

const todo = (state, { type, payload}) => {
  switch (type) {
    case 'ADD_TODO':
      return {
        ...payload,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== payload.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

const undoableTodos = undoable(todos)

export default undoableTodos
