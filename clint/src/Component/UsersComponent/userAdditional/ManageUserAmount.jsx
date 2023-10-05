// import * as React from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import PaymentIcon from '@mui/icons-material/Payment';
// import PaymentsIcon from '@mui/icons-material/Payments';
// import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import PaidIcon from '@mui/icons-material/Paid';
// import AddCardIcon from '@mui/icons-material/AddCard';

// export default function LabelBottomNavigation() {
//     const [value, setValue] = React.useState('');

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <BottomNavigation sx={{ width: 500, padding: "0.6vmax", borderRadius: "8px" }} value={value} onChange={handleChange}>
//             <BottomNavigationAction
//                 label="DailySaveing"
//                 value="dailysaveing"
//                 icon={<PaymentIcon />}
//             />
//             <BottomNavigationAction
//                 label="MonthlySaveing"
//                 value="monthlysaveing"
//                 icon={<AccountBalanceWalletIcon />}
//             />
//             <BottomNavigationAction
//                 label="DailyPaidLoan"
//                 value="dailypaidloan"
//                 icon={<CurrencyExchangeIcon />}
//             />
//             <BottomNavigationAction
//                 label="MonthlyPaidLoan"
//                 value="monthlypaidloan"
//                 icon={<PaymentsIcon />}
//             />
//             <BottomNavigationAction
//                 label="Widraw"
//                 value="widraw"
//                 icon={<PaidIcon />}
//             />
//             <BottomNavigationAction
//                 label="AddLoan"
//                 value="addloan"
//                 icon={<AddCardIcon />}
//             />
//         </BottomNavigation>
//     );
// }





import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaidIcon from '@mui/icons-material/Paid';
import AddCardIcon from '@mui/icons-material/AddCard';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    AddMonthlyPaidLoan,
    AddMonthlySaveing,
    AddTotalLoan,
    AddWidraw,
    DailyPaidLoanAdd,
    DailySaveingAdd,
    userProfile
} from '../../../Action/userAction';

export default function LabelBottomNavigation() {

    const { id } = useParams()
    const dispatch = useDispatch();

    const [value, setValue] = React.useState('');
    const [showForm, setShowForm] = React.useState(false); // State to control form display
    const [amount, setAmount] = React.useState('');


    const handleChange = (event, newValue) => {
        setValue(newValue);
        setShowForm(true); // Show the form when a button is clicked
    };


    const handleFormSubmit = async (event, formValue) => {
        event.preventDefault();
        // Handle form submission here, e.g., make an API request or update state
        if (formValue === "dailysaveing") {
            await dispatch(DailySaveingAdd(amount, id))
            alert(`Add ${value} Successfully !`);
            dispatch(userProfile(id));

        } else if (formValue === "monthlysaveing") {
            await dispatch(AddMonthlySaveing(amount, id))
            alert(`Add ${value} Successfully !`);
            dispatch(userProfile(id))

        } else if (formValue === "dailypaidloan") {

            await dispatch(DailyPaidLoanAdd(amount, id))
            alert(`Add ${value} Successfully !`);
            dispatch(userProfile(id))

        } else if (formValue === "monthlypaidloan") {

            await dispatch(AddMonthlyPaidLoan(amount, id))
            alert(`Add ${value} Successfully !`);
            dispatch(userProfile(id))

        } else if (formValue === "widraw") {
            await dispatch(AddWidraw(amount, id))
            alert(`Add ${value} Successfully !`);
            dispatch(userProfile(id))

        } else if (formValue === "loan") {
            let totalloan = amount;
            await dispatch(AddTotalLoan(totalloan, id))
            alert(`Add ${value} Successfully !`);
            dispatch(userProfile(id))

        } else {

            alert("No Request Found !")
        }
        console.log(`Form submitted with value: ${formValue}`);
        setAmount("")
        setShowForm(false); // Hide the form after submission
    };

    return (
        <div>
            <BottomNavigation sx={{ width: 500, padding: "0.6vmax", borderRadius: "8px" }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="DailySaveing"
                    value="dailysaveing"
                    icon={<PaymentIcon />}
                />
                <BottomNavigationAction
                    label="MonthlySaveing"
                    value="monthlysaveing"
                    icon={<AccountBalanceWalletIcon />}
                />
                <BottomNavigationAction
                    label="DailyPaidLoan"
                    value="dailypaidloan"
                    icon={<CurrencyExchangeIcon />}
                />
                <BottomNavigationAction
                    label="MonthlyPaidLoan"
                    value="monthlypaidloan"
                    icon={<PaymentsIcon />}
                />
                <BottomNavigationAction
                    label="Widraw"
                    value="widraw"
                    icon={<PaidIcon />}
                />
                <BottomNavigationAction
                    label="Loan"
                    value="loan"
                    icon={<AddCardIcon />}
                />
            </BottomNavigation>

            {showForm && (
                <form onSubmit={(e) => handleFormSubmit(e, value)} style={{ textAlign: "center" }}>
                    <input
                        type="number"
                        value={amount}
                        placeholder={value}
                        className='registerInputs'
                        required
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                    />
                    <Button type="submit">
                        Add {value}
                    </Button>
                    {/* <button type="submit">Submit</button> */}
                </form>
            )}
        </div>
    );
}
