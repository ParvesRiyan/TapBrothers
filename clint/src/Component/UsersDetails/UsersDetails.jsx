import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { GetAllUsers } from '../../Action/userAction'
import UsersTable from "./UsersTable.jsx"
import "./UsersDetails.css"

const UsersDetails = () => {

    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.users);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users); // Replace 'users' with your user data

    // Define a function to handle search input changes
    const handleSearchInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Filter the user list based on the search query
        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredUsers(filtered);
    };

    const submitHandler = (e) => {
        e.preventDefault()

        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredUsers(filtered);
    }

    useEffect(() => {
        dispatch(GetAllUsers())
        setFilteredUsers(users)
    }, [dispatch])

    return (
        <Fragment>
            <div className="AllUsersDetails">
                <div className="usersHeader">
                    <h1>All Users Details For Admin</h1>
                    <h4>TAP AR Bnondhu mohol sombay somiti</h4>
                </div>

                <div >
                    <form onSubmit={submitHandler} className='SearchInput'>
                        <input
                            type="search"
                            placeholder='search user'
                            onChange={handleSearchInputChange}
                            value={searchQuery} />
                        <button type='submit'>Search</button>
                    </form>
                </div>

                <UsersTable users={filteredUsers} />
            </div>
        </Fragment>
    )
}

export default UsersDetails
