// actions/dataActions.js
export const ADD_USER ='ADD_USER';
// Action to add a user
export const addUser = (user) => {
    return {
      type: 'ADD_USER',
      payload: user,
    };
  };
  
  // Implement actions for other data types and operations as needed
  