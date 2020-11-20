import React, {useState} from 'react'
import { registerUser } from './auth/Login_Register/actions'
import { useSelector, useDispatch } from 'react-redux'
import {Redirect} from 'react-router-dom'
const Register = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch=useDispatch()
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: ''
    });
    const userDetails=  {
        user_name: user.name,
        email: user.email,
        password:user.password
    }
    
    const onChange = e => setUser({
        ...user, [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        console.log(userDetails)
        dispatch(registerUser(userDetails))
    }
    if (isAuth) {
        return (<Redirect to="/login"></Redirect>)
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm-4 ml-5 mt-5">
                    <h4>New User? Register Now!</h4>
            <div className='form-group'>
                <label>Enter User Name</label>
                <input className='form-control'
                    type='text' name='name' value={user.name} onChange={onChange}/>
            </div>
            <div className='form-group'>
                <label>Enter Email</label>
                <input className='form-control'
                    type='email' name='email' value={user.email} onChange={onChange}/>
            </div>
            <div className='form-group'>
                <label>Enter Password</label>
                <input className='form-control'
                    type='password' name='password' value={user.password} onChange={onChange}/>
            </div>
                <input className='btn btn-success'
                    type='submit'  value='Register Now'/>
                </div>
            </div>
            
            
        </form>
    )
}

export default Register
