import React, { Fragment } from 'react'
import { SpeedDial, SpeedDialAction } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Action/adminAction';


// import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';




const AdminOption = () => {
    const { admin } = useSelector((state) => state.admin);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const spdActions = [
        { icon: <AccountCircleIcon />, name: "AdminProfile", func: account },
        { icon: <AdminPanelSettingsIcon />, name: "AdminRegister", func: AdminRegister },
        { icon: <PersonAddIcon />, name: "CreateUser", func: createUser },
        { icon: <GroupIcon />, name: "UsersDetails", func: usersDetails },
        { icon: <DashboardIcon />, name: "Dashboard", func: Dashboard },
        { icon: <LogoutIcon />, name: "Logout", func: Logout },
    ];

    function account() {
        navigate("/account")
    }
    function AdminRegister() {
        navigate("AdminRegister")
    }
    function createUser() {
        navigate("/createuser")
    }
    function usersDetails() {
        navigate("/usersdetails")
    }
    function Dashboard() {
        navigate("/dashboardadmin")
    }
    function Logout() {
        dispatch(logout())
        alert("Logout Successfully !")
        window.location.reload();

    }

    return (
        <Fragment>
            <div className='speedDial'>
                <SpeedDial
                    ariaLabel="basic"
                    direction='down'
                    sx={{
                        position: "fixed",
                        top: "2vh",
                        right: "5vw",
                    }}
                    icon={<img
                        className='speedDialIcon'
                        src={admin.avatar.url}
                        alt='admin avatar'
                    />
                    }
                >
                    {spdActions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={action.func}
                            tooltipOpen={window.innerWidth <= 600 ? true : false}
                        />
                    ))}
                </SpeedDial>
            </div>
        </Fragment>
    )
}

export default AdminOption
