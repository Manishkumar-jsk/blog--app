import './login.css';
import { Link } from 'react-router-dom';
import { useContext, useRef } from 'react';
import axios from "axios"
import {Context} from '../../components/context/Context'

export default function Login() {
  const userRef = useRef()
  const passRef = useRef()
  const {dispatch,isFetching} =  useContext(Context);

  const handlesubmit = async (e) => {
    e.preventDefault()
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post('/auth/login',{
        username:userRef.current.value,
        password:passRef.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    } catch (error) {
      dispatch({type:"LOGIN_FAILURE"})
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handlesubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your Username..." ref = {userRef}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." ref = {passRef} />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
      </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}
