// reducers/dataReducer.js
import { ADD_USER, DELETE_USER, EDIT_USER } from '../actions/dataActions';

const initialState = {
  users: [{id:'',name:'',address:'',phone:''}],
  farms: [],
  commodities: [],
  certificates: [],
  warehouses: [],
  transactions: {
    add: [],
    shift: [],
    // Add other transaction types as needed
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      // Implement logic to add a user to the state
      return { ...state, users: [...state.users, action.payload] };
    case DELETE_USER:
      // Implement logic to delete a user from the state by their ID
      const updatedUsersDelete = state.users.filter((user) => user.id !== action.payload.id);
      return { ...state, users: updatedUsersDelete };
    case EDIT_USER:
      // Implement logic to edit a user in the state by their ID
      const updatedUsersEdit = state.users.map((user) =>
        user.id === action.payload.oldUser.id ? action.payload.newUser : user
      );
      return { ...state, users: updatedUsersEdit };
    // Add cases for other data types and actions as needed
    default:
      return state;
  }
};

export default dataReducer;
