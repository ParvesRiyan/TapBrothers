import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ModalProfile from "./ModalProfile.jsx"
import { useNavigate } from "react-router-dom"
import Modal from '@mui/material/Modal';



export default function StickyHeadTable({ users }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [userData, setUserData] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate()

    const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'trxid', label: 'TrxId', minWidth: 50 },
        {
            id: 'number',
            label: 'Number',
            minWidth: 100,
            align: 'right',
            format: (value) => value.toFixed(),
        },
        {
            id: 'totalsaveing',
            label: 'TotalSaveing',
            minWidth: 50,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'totalloan',
            label: 'TotalLoan',
            minWidth: 50,
            align: 'right',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'totaldueloan',
            label: 'TotalDueLoan',
            minWidth: 50,
            align: 'right',
            format: (value) => value.toFixed(2),
        },
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleProfileClick = (user) => {
        navigate(`/user/${user._id}`)
        // console.log('Viewing profile of user:', user);
    };
    const showModalAsProfile = (user) => {
        handleOpen();
        setUserData(user);
        // Navigate to the user's profile page or perform any desired action
        // console.log('Viewing profile of user:', user);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell
                                key="ViewProfile"
                                align="center"
                                style={{ minWidth: 80 }}
                            >
                                Profile
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users && users.length > 0 ? (users
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                        <button className='UsersBtn' onClick={() => handleProfileClick(row)}><ManageAccountsIcon /></button>
                                        <button className='UsersBtn' onClick={() => showModalAsProfile(row)}><PersonPinIcon /></button>

                                    </TableRow>
                                );
                            })) : (
                            <TableRow>
                                <TableCell >No users found</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {users && users.length > 0 && (
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalProfile user={userData} />
            </Modal>
        </Paper>
    );
}