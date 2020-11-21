import {
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
} from "./actionType";

export const init = {
    isLoading: false,
    employees: [],
    errMsg: "",
    successMsg: "",
}
const reducer = (state = init, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEES_SUCCESS: {
            return {
                ...state,
                loading: false,
                successMsg: action.payload.message,
                employees: action.payload.employees.data,
            };
        }
        case FETCH_EMPLOYEES_FAILURE:{
            return {
                ...state,
                isError: true,
                errMsg: action.payload,
            };
        }
            default:
      return state;
  }
};

export default reducer;