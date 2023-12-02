// // store
// const store = {}

// // reducer 
// function todoReducer(state, action) {
//     switch (action.type) {
//       case ADD_TODO_ITEM: {
//         const { title } = action.payload;
  
//         const newTodo = {
//           completed: true,
//           title,
//         }
  
//         return {
//           ...state,
  
//           todos: [...state.todos, newTodo],
//         };
//       }
  
//       default:
//         return state;
//     }
//   }