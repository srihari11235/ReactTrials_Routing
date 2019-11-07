import React, {useState, setState } from 'react'
import './login.css'
import {Redirect} from 'react-router-dom'
import authService from './authService'

export function Login (props) {
//    const users =
//       [
//            {
//                username: "Sri",
//                password: "pass",
//            },
//            {
//                 username: 'Srihari112',
//                 password: 'password'
//            }
//        ];

        
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validUser, setValidUser] = useState(false);

    //------------------Redirecting to New page Using <REDIRECT> [Recommended Approach]-------------------------
    // const handleSubmit = (e) => {
    //     const detail = users.find(user => {
    //             return user.username === email;
    //     });

    //     if(detail && detail.password === password)
    //         setValidUser(true);
    // }

    // if(validUser)
    //     return <Redirect to ="/home"/>

    // ----------------Redirect to new page using props.history.push("path")-----------------
    // const handleSubmit = (e) => {
    //     const detail = users.find(user => {
    //             return user.username === email;
    //     });

    //     if(detail && detail.password === password)
    //         props.history.push("/home");
    // }

    const login = () => {
        authService.authenticate(email,password);

        if(authService.isAuthenticated)
            setValidUser(true);;
    }

    const {from} = props.location.state.from.pathname || {from : {pathname: "/"}}

    console.log(props.location.state.from.pathname);
    if(authService.isAuthenticated)
        return <Redirect to={from}/>

    return (
        <div className="centerlayout">
            <label for = "username"> <b>UserName </b> </label>
            <input type = "text" placeholder ="Enter username" name='username' onChange = {e => setEmail(e.target.value)}></input> <br />
            
            <label for = "password"> <b>Password </b></label>
            <input type = "password" placeholder ="Enter password" name='password' onChange = {e => setPassword(e.target.value)}></input> <br />

            <button onClick={login}>
                <h2>
                    Login
                </h2>
            </button>
        </div>
    )    
}

export default Login