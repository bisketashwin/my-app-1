// reducers/dataReducer.js
import {ADD_USER} from '../actions/dataActions'
// Define your initial state
const initialState = {
    users: [],
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
  
  // Define your data reducer
  const dataReducer = (state = initialState, action) => {
    // Handle actions to update state
    switch (action.type) {
      case 'ADD_USER':
        // Implement logic to add a user to the state
        return { ...state, users: [...state.users, action.payload] };
      // Add cases for other data types and actions as needed
      default:
        return state;
    }
  };
  
  export default dataReducer;
  