import React, { Fragment, useState } from 'react'
import "./Contact.css"
import { useDispatch } from 'react-redux'
import { contact } from '../../Action/userAction';
import SendIcon from '@mui/icons-material/Send';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MessageIcon from '@mui/icons-material/Message';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        await dispatch(contact(name, email, message))
        alert("message Sent Successfully !")
        navigate("/")

    }
    return (
        <Fragment>
            <div className="contact">
                <div className="contactHeader">
                    <h1>Feel Free to contact us</h1>
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
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <br />
                            <AlternateEmailIcon />
                            <input
                                type="email"
                                placeholder='Enter Your Valid email'
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <br />
                            <MessageIcon />
                            <textarea
                                rows="4"
                                cols="50"
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

export default Contact
