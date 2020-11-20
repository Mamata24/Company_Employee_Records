import {
    FETCH_EMPLOYEES_REQUEST,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_FAILURE
} from "./actionTypes";
import axios from "axios";

export const fetchEmployeesRequest = () => ({
  type: FETCH_EMPLOYEES_REQUEST,
});

export const fetchEmployeesSuccess = (payload) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload,
});

export const fetchEmployeesFailure = (payload) => ({
  type: FETCH_EMPLOYEES_FAILURE,
  payload,
});

export const fetchEmployees = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(fetchEmployees());
  axios
    .post("http://localhost:5000/allemployees?page=1&limit=5", payload)
    .then((res) => {
      console.log(res.data)
      dispatch(fetchEmployees(res.data))
    
    })
    .catch((err) => dispatch(fetchEmployeesFailure(err)));
};