import React, { Fragment, useState } from 'react'
import "./CreateUser.css"
import { Avatar, Typography, Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { userCreate } from '../../Action/userAction';
import { useNavigate, } from 'react-router-dom';

const CreateUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { user } = useSelector(state => state.user);


    const [trxid, setTrxid] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [avatar, setAvatar] = useState("");
    const [nationalid, setNationalid] = useState("");
    // const [dailySaveing, setDailySaveing] = useState({ amount: "", day: "" })
    // const [monthlySaveing, setMonthlySaveing] = useState({ amount: "", month: "" })
    // const [dailyPaidLoad, setDailyPaidLoad] = useState({ amount: "", day: "" })
    // const [monthlyPaidLoan, setMonthlyPaidLoan] = useState({ amount: "", month: "" })
    // const [widraw, setWidraw] = useState({ amount: "", date: "" })
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
            const createdUserId = await dispatch(userCreate(trxid, name, email, number, avatar, nationalid, perday));

            navigate(`/user/${createdUserId}`);

            alert("User Create Successful!");
        } catch (error) {
            console.error(error);
            alert("User Create Failed!");
        }

    }

    return (
        <Fragment>
            <div className="Register">
                <div className="register">

                    <Typography variant='h3' style={{ padding: "2vmax" }}>
                        Create User
                    </Typography>
                    <form className='registerForm' onSubmit={submitHandler}>
                        <Avatar
                            src={avatar}
                            alr="Admin"
                            sx={{ height: "10vmax", width: "10vmax" }}
                        />
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        <input
                            type="number"
                            value={trxid}
                            placeholder='Enter User Id Number (BOOK ID)'
                            className='registerInputs'
                            required
                            onChange={(e) => setTrxid(e.target.value)}
                        />
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
                            type="number"
                            value={number}
                            placeholder='phone number'
                            className='registerInputs'
                            required
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <input
                            type="number"
                            value={nationalid}
                            placeholder='National ID'
                            className='registerInputs'
                            required
                            onChange={(e) => setNationalid(e.target.value)}
                        />
                        <input
                            type="number"
                            value={perday}
                            placeholder='Amount of Saveing by a day'
                            className='registerInputs'
                            required
                            onChange={(e) => setPerday(e.target.value)}
                        />
                        <Button type="submit">
                            Create User
                        </Button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateUser



// <input
//     type="number"
//     value={dailySaveing.amount}
//     placeholder='Saveing today'
//     className='registerInputs'
//     required
//     onChange={(e) => setDailySaveing({ ...dailySaveing, amount: parseFloat(e.target.value) || '' })}
// />
// <input
//     type="date"
//     value={dailySaveing.day}
//     className='registerInputs'
//     required
//     onChange={(e) => setDailySaveing({ ...dailySaveing, day: (e.target.value) })}
// />
// <input
//     type="number"
//     value={monthlySaveing.amount}
//     placeholder='total Saveing At this month'
//     className='registerInputs'
//     required
//     onChange={(e) => setMonthlySaveing({ ...monthlySaveing, amount: parseFloat(e.target.value) || '' })}
// />
// <input
//     type="date"
//     value={monthlySaveing.month}
//     className='registerInputs'
//     required
//     onChange={(e) => setMonthlySaveing({ ...monthlySaveing, month: (e.target.value) })}
// />
// <input
//     type="number"
//     value={dailyPaidLoad.amount}
//     placeholder='paid loan amount today'
//     className='registerInputs'
//     required
//     onChange={(e) => setDailyPaidLoad({ ...dailyPaidLoad, amount: parseFloat(e.target.value) || '' })}
// />
// <input
//     type="date"
//     value={dailyPaidLoad.day}
//     className='registerInputs'
//     required
//     onChange={(e) => setDailyPaidLoad({ ...dailyPaidLoad, day: (e.target.value) })}
// />
// <input
//     type="number"
//     value={monthlyPaidLoan.amount}
//     placeholder='Total paid loan At this month'
//     className='registerInputs'
//     required
//     onChange={(e) => setMonthlyPaidLoan({ ...monthlyPaidLoan, amount: parseFloat(e.target.value) || '' })}
// />
// <input
//     type="date"
//     value={monthlyPaidLoan.month}
//     className='registerInputs'
//     required
//     onChange={(e) => setMonthlyPaidLoan({ ...monthlyPaidLoan, month: (e.target.value) })}
// />
// <input
//     type="number"
//     value={widraw.amount}
//     placeholder='Any Widraw amount'
//     className='registerInputs'
//     required
//     onChange={(e) => setWidraw({ ...widraw, amount: parseFloat(e.target.value) || '' })}
// />
// <input
//     type="date"
//     value={widraw.date}
//     className='registerInputs'
//     required
//     onChange={(e) => setWidraw({ ...widraw, date: (e.target.value) })}
// />

