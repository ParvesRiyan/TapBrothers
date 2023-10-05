import React, { Fragment, useEffect } from 'react'
import "./Dashboard.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUsers } from '../../Action/userAction'


const Dashboard = () => {

    const dispatch = useDispatch()
    const { totalsaveing } = useSelector(state => state.usersSaveing)
    const { loanDetails } = useSelector(state => state.usersLoanDetails)


    const style = {
        backgroundColor: "#3f51b5",
        color: "#ffc107",
        width: "30vw",
        padding: "2vmax",
        textAlign: "center",
        margin: "1.5vmax",
        borderRadius: "10px",
    }

    useEffect(() => {
        dispatch(GetAllUsers())
    }, [dispatch])

    const { users } = useSelector(state => state.users)

    return (
        <Fragment>
            <div className="Dashboard">
                <div className="dashboardHeader">
                    <h1>Welcome to your Dashboard</h1>
                    <h3>TAP Bro AR Bondhu Mohol Somobay</h3>
                </div>

                <div className="DashboardDetailsCard">
                    <Card sx={style} className='DashboardCard'>
                        <CardContent>
                            <Typography variant='h4'>
                                Total Users
                            </Typography>
                            <Typography variant='h5'>
                                {users && users.length} - Parson
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={style} className="DashboardCard">
                        <CardContent>
                            <Typography variant='h4'>
                                All Users Saveing
                            </Typography>
                            <Typography variant='h5'>
                                TK. {totalsaveing && totalsaveing} /=
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={style} className="DashboardCard">
                        <CardContent>
                            <Typography variant='h4'>
                                All Users Loan Amount
                            </Typography>
                            <Typography variant='h5'>
                                TK. {loanDetails && loanDetails.totalUserLoan} /=
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={style} className="DashboardCard">
                        <CardContent>
                            <Typography variant='h4'>
                                All Users Due Loan With Profit
                            </Typography>
                            <Typography variant='h5'>
                                TK. {loanDetails && loanDetails.totalUserDueLoan} /=
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={style} className="DashboardCard">
                        <CardContent>
                            <Typography variant='h4'>
                                All Users Paid Loan Till Now
                            </Typography>
                            <Typography variant='h5'>
                                TK. {loanDetails && loanDetails.totalUserPaidLoan} /=
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={style} className="DashboardCard">
                        <CardContent>
                            <Typography variant='h4'>
                                All Users Profit in this Loan
                            </Typography>
                            <Typography variant='h5'>
                                TK. {loanDetails && loanDetails.totalProfitByUser} /=
                            </Typography>
                        </CardContent>
                    </Card>
                </div>


            </div>
        </Fragment>
    )
}

export default Dashboard
