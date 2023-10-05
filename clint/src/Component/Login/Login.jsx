import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmin, login } from '../../Action/adminAction.js';
import "./login.css"
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, message, loading } = useSelector(state => state.admin);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await dispatch(login(email, password));

        await dispatch(getAdmin())

        navigate("/account")
    }

    useEffect(() => {
        if (error) {
            dispatch({ type: "ClearError" })
        }
        if (message) {
            dispatch({ type: "ClearMessage" })
        }
    }, [error, message, dispatch])


    return (
        <>
            <div className="login">
                <div className="login-Container">
                    <h2>Login Admin Only</h2>
                    <form className='loginForm' onSubmit={submitHandler}>
                        <div>
                            <input
                                type="email"
                                placeholder='Enter your email'
                                required onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <br />
                            {/* <input
                                type="password"
                                placeholder='Enter Your Valid Password'
                                required onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            /> */}
                            <div className="password-input">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter Your Valid Password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                <Button
                                    className="password-toggle-button"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </Button>
                            </div>
                            <br />
                            <button type="submit" disabled={loading}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
