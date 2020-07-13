
export const initialState = [{
    title: 'The tasks you add will be displayed here',
    completed: false,
    id: 1
  },
  {
    title: 'Click on a task to mark as completed',
    completed: false,
    id: 2
  }]

export const reducer = (state, action) => {
  switch(action.type){
      case 'NEW_TODO':
          return[
              ...state,
              action.payload
          ]
    default:
      return state;
  }
};
