import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Box, Typography } from '@mui/material';
import { getNote, deleteNote } from '../../../Action/adminAction';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    backgroundColor: "#555",
    boxShadow: 24,
    p: 4,
};
const AdminNote = () => {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState('');

    const handleClose = () => setOpen(false);
    const handleOpen = (message) => {
        setSelectedMessage(message);
        setOpen(true);
    };

    const delMessage = async (id) => {
        console.log(id)
        await dispatch(deleteNote(id))
        alert("Delete Note Successfull !")
        dispatch(getNote());
    }

    useEffect(() => {
        dispatch(getNote());
    }, [dispatch]);

    const { notes } = useSelector((state) => state.adminNote);
    return (
        <Fragment>
            <div className="card animateR">
                <div className="userMessages">
                    {notes &&
                        notes.map((item) => (
                            <div key={item.id} className="message-container">
                                <h6>{item.name}</h6>
                                <i>{item.date}</i>
                                <br />
                                <Button color="error" onClick={() => delMessage(item._id)}>DEL</Button>
                                <Button onClick={() => handleOpen(item.message)}>Message</Button>
                            </div>
                        ))}
                    <div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Message
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {selectedMessage}
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminNote

