import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminNote } from '../../../Action/adminAction';
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { getNote } from '../../../Action/adminAction';

const AddNote = () => {

    const { admin } = useSelector(state => state.admin)
    const dispatch = useDispatch();
    const [name, setName] = useState(`${admin && admin.name}`)
    const [message, setMessage] = useState("")


    const submitHandler = async (e) => {
        e.preventDefault()
        await dispatch(adminNote(name, message))
        alert("Add Note Successfully !")
        dispatch(getNote())
        setMessage("")

    }
    return (
        <Fragment>
            <div className="contact">
                <div className="contactHeader">
                    <h1>Set Your Note Today</h1>
                    <p>TAP bro AR Bondhu mohol somobay somiti</p>
                </div>

                <div className="contact-Container">
                    <h2>Feel Free to message</h2>
                    <form className='contactForm' onSubmit={submitHandler}>
                        <div>
                            <DriveFileRenameOutlineIcon />
                            <input
                                type="text"
                                placeholder='Enter your name'
                                required
                                className='addNoteInputs'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <br />
                            <MessageIcon />
                            <textarea
                                rows="4"
                                cols="50"
                                className='addNoteInputs'
                                placeholder='Enter your message'
                                required
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />
                            <br />
                            <button type="submit"><SendIcon /> Sent</button>
                        </div>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}

export default AddNote

