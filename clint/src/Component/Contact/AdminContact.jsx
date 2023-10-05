import React, { Fragment } from 'react';
import './AdminContact.css';
import AdminNote from './AdminNote/AdminNote';
import UserMessage from './AdminNote/UserMessage';
import AddNote from './AdminNote/AddNote';


const AdminContact = () => {

    return (
        <Fragment>
            <div className="profileHeader animateTop">
                <div className="headerText">
                    <h2>TAP Bro</h2>
                    <p>AR Bondhu mohol somobay somiti</p>
                </div>
            </div>
            <div className="contactBox">
                <div className="userMessagesDetails">
                    <h1>Users Messages</h1>
                    <UserMessage />
                </div>

                <div className="adminContact">
                    <h1>Admin Notes</h1>
                    <AdminNote />
                </div>
            </div>

            <div className="addNoteBox">
                <AddNote />
            </div>
        </Fragment>
    );
};

export default AdminContact;
