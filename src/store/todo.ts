// Action types
const ADD_TODO = 'todo/ADD_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';

// Action creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: { todo },
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: { id },
});

// initial state
const initialState = {
  todoList: [],
};

// Reducer
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload.todo],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
