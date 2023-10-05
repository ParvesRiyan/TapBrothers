import React, { Fragment, useState } from 'react'
import "./profile.css"
import { useDispatch, useSelector } from 'react-redux'
import UsersTable from "./UsersTable.jsx"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {
    AdminInvestmentAdd,
    getAdmin,
} from '../../../Action/adminAction';

const AdminProfile = () => {

    const { admin } = useSelector(state => state.admin)
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();

        await dispatch(AdminInvestmentAdd(name, Number(amount)))

        await dispatch(getAdmin())

        alert("Add Investment Successfull !")
    }

    const adminInvestment = () => {
        let admininvest = 0;

        admin.admininvestment.forEach((item) => {
            admininvest += item.amount
        });

        return admininvest
    }

    const totalInvestWithSaveing = () => {
        let totalInvest = 0;

        const adminInvest = adminInvestment();

        totalInvest = adminInvest + admin.totalusersaveing;

        return totalInvest;
    }


    return (
        <Fragment>
            <div className="profile">
                <div className="profileHeader animateTop">
                    <div className="headerText">
                        <h2>Welcome to Admin {admin.name}</h2>
                        <p>TAP AR Bondhu mohol somobay somiti</p>
                    </div>
                </div>
                <div className="profileContainer">

                    <div className="profileImg">
                        <div className="adminParsonalData">
                            <img src={admin.avatar.url} alt="Profile avatar" />
                            <div className="adminDetails">
                                <h1>{admin.name}</h1>
                                <h3>{admin.email}</h3>
                                <h4>{admin.number}</h4>
                            </div>
                        </div>
                        <div className="usersData">
                            <h2>All Users Amount Details</h2>
                            <div className="usersTable">
                                <UsersTable admin={admin} />
                            </div>
                        </div>
                    </div>

                    <div className="adminInvestment">
                        <h2 style={{ textAlign: "center", margin: "10vh" }}>Admin Investment Details</h2>
                        <div className="investmentDetails">
                            <div className="investorTable">
                                <table style={{ width: "50%" }}>
                                    <tr>
                                        <th>Investor Name</th>
                                        <th>Investor Amount</th>
                                    </tr>
                                    {admin.admininvestment.map((item) => (
                                        <tr key={item._id}>
                                            <td>{item.name}</td>
                                            <td>{item.amount}.TK</td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                            < ArrowRightAltIcon />
                            <div className="addInvestment">
                                <h2>Add InvestMent</h2>
                                <form className='loginForm' onSubmit={submitHandler}>
                                    <div>
                                        <input
                                            type="name"
                                            placeholder='Enter admin name'
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                            value={name}
                                        />
                                        <br />
                                        <input
                                            type="number"
                                            placeholder='enter invest amount !'
                                            required
                                            onChange={(e) => setAmount(e.target.value)}
                                            value={amount}
                                        />
                                        <br />
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                                < ArrowRightAltIcon />
                            </div>
                            < ArrowRightAltIcon />
                            <div className="Investment">
                                <div className="totalInvest">
                                    <h3>Total Investment with saveing</h3>
                                    <h2> {totalInvestWithSaveing()}.TAKA</h2>
                                </div>
                                <hr />
                                <div className="adminInvest">
                                    <h3>admin Investment</h3>
                                    <h2>{
                                        adminInvestment()
                                    } .TAKA</h2>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default AdminProfile
