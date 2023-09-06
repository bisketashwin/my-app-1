// actions/dataActions.js
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';
// Action to add a user
export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: user,
  };
};
export const editName = (oldUser, newUser) => ({
  type: 'EDIT_NAME',
  payload: { oldUser, newUser},
});
export const deleteName = (user) => ({
  type: 'DELETE_NAME',
  payload: user,
});
// Implement actions for other data types and operations as needed
