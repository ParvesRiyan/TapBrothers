import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addProfitToInvest, getAdmin } from '../../../Action/adminAction';



export default function AccessibleTable({ admin }) {

    const dispatch = useDispatch();

    const { error } = useSelector(state => state.additionAmount)

    function createData(name, amount) {
        return { name, amount };
    }

    const AddProfit = async () => {
        await dispatch(addProfitToInvest());
        alert("Add Profit Successfully")
        dispatch(getAdmin())
    }

    React.useEffect(() => {
        if (error) {
            alert(error)
        }
    }, [error])

    const rows = [
        createData('TotalUsersSaveing', admin.totalusersaveing),
        createData('TotalUserLoan', admin.totaluserloan),
        createData("TotalUserPaidLoan", admin.totaluserpaidloan),
        createData("TotalUserDueLoan", admin.totaluserdueloan),
        createData("TotalProfitByUser", admin.totalprofitbyuser),
        createData("ProfitAtThisMonth", admin.profitatthismonth)
    ];
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="caption table">
                <caption>All Users Transaction amount statement
                    <Button
                        color='secondary'
                        onClick={AddProfit}
                    > Add Profit to invest</Button>
                </caption>
                <TableHead>
                    <TableRow>
                        <TableCell><b>All Users Data</b></TableCell>
                        <TableCell align="right"><b>Amount</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}