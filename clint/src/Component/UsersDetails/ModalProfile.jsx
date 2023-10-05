import * as React from 'react';
import Box from '@mui/material/Box';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Avatar, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    textAlign: "center",
    backgroundColor: "#3f51b5",
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ user }) {
    const navigate = useNavigate()

    const navigateToProfile = () => {
        navigate(`/user/${user._id}`)
    }

    return (
        <div>
            <Box sx={style}>
                <div className="modalUserDetails">
                    <Avatar
                        src={user && user.avatar.url}
                        alr="user"
                        sx={{ height: "10vmax", width: "10vmax", marginRight: "25px" }}
                    />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        trxid : {user && user.trxid}<br />
                        name : {user && user.name}<br />
                        email: {user && user.email}<br />
                        number: {user && user.number}<br />
                        NID :{user && user.nationalid}<br />
                    </Typography>
                </div><hr />
                <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: "center" }}>
                    TotalUserSaveing : {user && user.totalsaveing} <br />
                    TotalUserLoan : {user && user.totalloan} <br />
                    TotalUserDueLoan : {user && user.totaldueloan} <br />
                </Typography>
                <Button onClick={navigateToProfile}>
                    <ManageAccountsIcon />
                </Button>
            </Box>
        </div>
    );
}