import React, { useState } from 'react'
import Box from '@mui/material/Box';
import "./ModalEditForm.css"
import { Avatar, Button, Typography } from '@mui/material'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser, userProfile } from '../../../Action/userAction';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    backgroundColor: "#303f9f",
    borderRadius: '10px',
    textAlign: "center",
    boxShadow: 24,
    overflow: "hidden",
    p: 4,
};

export default function BasicModal() {

    const { id } = useParams();

    const dispatch = useDispatch();

    const [trxid, setTrxid] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [avatar, setAvatar] = useState("");
    const [nationalid, setNationalid] = useState("");
    const [totalsaveing, setTotalSaveing] = useState("");
    const [totalloan, setTotalLoan] = useState("");
    const [totalpaidloan, setTotalPaidLoan] = useState("");
    const [totaldueloan, setTotalDueLoan] = useState("");
    const [perday, setPerday] = useState("");

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

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateUser(trxid, name, avatar, email, number, nationalid, totalsaveing, totalloan, totalpaidloan, totaldueloan, perday, id))

            alert("User Update Successful!");
            dispatch(userProfile(id))
        } catch (error) {
            console.error(error);
            alert("User Updated Failed!");
        }

    }

    return (
        <div>
            <Box sx={style}>
                <Typography variant='h2' style={{ textAlign: "center" }}>
                    Update User From
                </Typography>
                <form className='ModalRegisterForm' onSubmit={submitHandler}>
                    <Avatar
                        src={avatar}
                        alr="Admin"
                        sx={{ height: "3vmax", width: "3vmax" }}
                    />
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <input
                        type="number"
                        value={trxid}
                        placeholder='Enter User Id Number (BOOK ID)'
                        className='ModalRegisterInputs'
                        required
                        onChange={(e) => setTrxid(e.target.value)}
                    />
                    <input
                        type="text"
                        value={name}
                        placeholder='Enter name'
                        className='ModalRegisterInputs'
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        value={email}
                        placeholder='Enter Valid email'
                        className='ModalRegisterInputs'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="number"
                        value={number}
                        placeholder='phone number'
                        className='ModalRegisterInputs'
                        required
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <input
                        type="number"
                        value={nationalid}
                        placeholder='National ID'
                        className='ModalRegisterInputs'
                        required
                        onChange={(e) => setNationalid(e.target.value)}
                    />
                    <input
                        type="number"
                        value={totalsaveing}
                        placeholder='TotalSaveing'
                        className='ModalRegisterInputs'
                        required
                        onChange={(e) => setTotalSaveing(parseFloat(e.target.value))}
                    />
                    <input
                        type="number"
                        value={totalloan}
                        placeholder='TotalLoan'
                        className='ModalRegisterInputs'
                        required
                        onChange={(e) => setTotalLoan(parseFloat(e.target.value))}
                    />
                    <input
                        type="number"
                        value={totalpaidloan}
                        placeholder='TotalPaidLoan'
                        className='ModalRegisterInputs'
                        required
                        onChange={(e) => setTotalPaidLoan(parseFloat(e.target.value))}
                    />
                    <input
                        type="number"
                        value={totaldueloan}
                        placeholder='TotalDueLoan'
                        className='ModalRegisterInputs'
                        required
                        onChange={(e) => setTotalDueLoan(parseFloat(e.target.value))}
                    />
                    <input
                        type="number"
                        value={perday}
                        placeholder='Day by saveing amount'
                        className='ModalRegisterInputs'
                        required
                        onChange={(e) => setPerday(e.target.value)}
                    />
                    <Button type="submit">
                        Update User
                    </Button>
                </form>
            </Box>
        </div>
    );
}