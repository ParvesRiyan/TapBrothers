import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { DeleteProfile, userProfile } from '../../Action/userAction';
import { Avatar, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DailySaveingList from "./userTableList/DailySaveing.jsx"
import MonthlySaveingList from "./userTableList/MonthlySaveingList.jsx"
import WidrawList from "./userTableList/WidrawList.jsx"
import DailyPaidLoan from "./userTableList/DailyPaidLoan.jsx"
import MonthlyPaidLoan from "./userTableList/MonthlyPaidLoan.jsx"
import EditNoteIcon from '@mui/icons-material/EditNote';
import Modal from '@mui/material/Modal';
import ModalEditForm from './userUpdateForm/ModalEditForm.jsx';
import ManageUserAmount from "./userAdditional/ManageUserAmount"

import "./userProfile.css"

const UserProfile = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { user } = useSelector((state) => state.userProfile);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteProfileAction = async () => {
        const name = prompt("Are you sure to delete this Profile ? Type User Name")

        if (user && user.name === name) {
            await dispatch(DeleteProfile(id))
            navigate("/usersdetails")
        } else {
            alert(`${user && user.name} profile has not Deleted !`)
        }

    }


    useEffect(() => {
        dispatch(userProfile(id));
    }, [dispatch, id])

    return (
        <Fragment>
            <div className="userProfile">
                <div className="userProfileHeader">
                    <h2>Welcome To My Profile</h2>
                    <h4>AR TAP Bondhu mohol Somobay somiti</h4>
                </div>
                <div className="AdminAdditionSection">
                    <ManageUserAmount />
                </div>
                <div className="parsonalDetails">
                    <div className="avatar">
                        <Avatar
                            src={user && user.avatar.url}
                            alr="user"
                            sx={{ height: "15vmax", width: "15vmax", marginRight: "25px" }}
                        />
                        <Button onClick={handleOpen}>
                            <EditNoteIcon />Edit
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <ModalEditForm user={user} />
                        </Modal>
                    </div>
                    < ArrowRightAltIcon />
                    <div className="data">
                        <h2>User Parsonal Details</h2>
                        <hr />
                        {user && <h2><i>ID OF User Book :</i> {user.trxid}</h2>}
                        {user && <h2><i>User Name :</i> {user.name}</h2>}
                        {user && <h2><i>User Email :</i> {user.email}</h2>}
                        {user && <h2><i>User Number :</i> {user.number}</h2>}
                        {user && <h2><i>User NationalId No :</i> {user.nationalid}</h2>}
                        {user && <h2><i>User Saveing Amount B_A_D :</i> {user.perday}</h2>}
                    </div>
                    < ArrowRightAltIcon />
                    <div className="amountDetails">
                        <h2>User Loan Details</h2>
                        <hr />
                        {user && <h2><i>User Total Saveing :</i> {user.totalsaveing}</h2>}
                        {user && <h2><i>User Total Loan :</i> {user.totalloan}</h2>}
                        {user && <h2><i>User Total Paid Loan :</i> {user.totalpaidloan}</h2>}
                        {user && <h2><i>User Total Due Loan :</i> {user.totaldueloan}</h2>}
                        {user && <h2><i>User Profit Of This Loan :</i> {user.totalprofitbyloan}</h2>}
                    </div>
                </div>

                <div className="AllTransactions">
                    <div className="dailySaveing">
                        <h3>Daily saveing</h3>
                        <DailySaveingList user={user} />
                    </div>
                    <div className="monthlySaveing">
                        <h3>monthly saveing</h3>
                        <MonthlySaveingList user={user} />
                    </div>

                    <div className="widraw">
                        <h3>Widraw</h3>
                        <WidrawList user={user} />
                    </div>
                </div>
                <div className="AllTransactions">
                    <div className="dailyPaidLoan">
                        <h3>Daily Paid Loan</h3>
                        <DailyPaidLoan user={user} />
                    </div>
                    <div className="monthlyPaidLoan">
                        <h3>Monthly Paid Loan</h3>
                        <MonthlyPaidLoan user={user} />
                    </div>
                </div>
            </div>
            <div className="deleteProfile">
                <Button variant="outlined" color="error" onClick={deleteProfileAction} startIcon={<DeleteIcon />}>
                    Delete Profile
                </Button>
            </div>
        </Fragment>
    )
}

export default UserProfile
