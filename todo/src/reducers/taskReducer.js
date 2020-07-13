
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
      // case 'TOGGLE_COMPLETE':
      //   console.log('toggle from reducer')
      //   return
      case 'CLEAR_COMPLETED':
      const notCompleted = state.filter(task => task.completed === false)
      console.log(notCompleted);
      return notCompleted
    default:
      return state;
  }
};
