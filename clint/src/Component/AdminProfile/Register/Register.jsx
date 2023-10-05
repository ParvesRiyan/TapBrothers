import React, { Fragment, useState } from 'react'
import "./Register.css"
import { Avatar, Typography, Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { adminRegister } from '../../../Action/adminAction';
import { useNavigate } from "react-router-dom"

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [avatar, setAvatar] = useState("");
    const [admininvestment, setAdminInvestment] = useState({ name: "", amount: "" })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setAvatar(Reader.result);
            }
        }

    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(adminRegister(name, email, password, number, avatar, admininvestment))
        alert("Admin Created Successfully !")
        navigate("/account")
    }

    return (
        <Fragment>
            <div className="Register">
                <div className="register">

                    <Typography variant='h3' style={{ padding: "2vmax" }}>
                        Create Admin
                    </Typography>
                    <form className='registerForm' onSubmit={submitHandler}>
                        <Avatar
                            src={avatar}
                            alr="Admin"
                            sx={{ height: "10vmax", width: "10vmax" }}
                        />
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        <input
                            type="text"
                            value={name}
                            placeholder='Enter name'
                            className='registerInputs'
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            value={email}
                            placeholder='Enter Valid email'
                            className='registerInputs'
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            value={password}
                            placeholder='password'
                            className='registerInputs'
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="number"
                            value={number}
                            placeholder='phone number'
                            className='registerInputs'
                            required
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <input
                            type="text"
                            value={admininvestment.name}
                            placeholder='Type admin name investor'
                            className='registerInputs'
                            required
                            onChange={(e) => setAdminInvestment({ ...admininvestment, name: e.target.value })}
                        />
                        <input
                            type="number"
                            value={admininvestment.amount}
                            placeholder='Invest Amount'
                            className='registerInputs'
                            required
                            onChange={(e) => setAdminInvestment({ ...admininvestment, amount: parseFloat(e.target.value) || '' })}
                        />
                        <Button type="submit">
                            Create Admin
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Register
