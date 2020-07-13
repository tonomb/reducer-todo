
export const initialState = [{
    title: 'The tasks you add will be displayed here',
    completed: false,
    id: 1
  },
  {
    title: 'Click on a task to mark as completed',
    completed: true,
    id: 2
  }]

export const reducer = (state, action) => {
  switch(action.type){
      case 'NEW_TODO':
          return[
              ...state,
              action.payload
          ]
      case 'TOGGLE_COMPLETE':
        const completed = state.map(item =>{
          if(item.id === action.payload.id){
            return {
              ...item,
              completed: !item.completed
            }
          } else {
            return item
          }
        })
      return completed
      case 'CLEAR_COMPLETED':
        const notCompleted = state.filter(task => task.completed === false)
      return notCompleted
    default:
      return state;
  }
};
