import React, { useEffect } from "react";
import "./App.css";
import "./animate.css";
import "./responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header.jsx";
import Home from "./Component/Home/Home.jsx";
import Login from "./Component/Login/Login.jsx";
import Register from "./Component/AdminProfile/Register/Register.jsx";
import AdminOption from "./Component/AdminProfile/AdminOption.jsx";
import GoalAndAchivment from "./Component/Goal&Achivment/GoalAndAchivment.jsx";
import AdminProfile from "./Component/AdminProfile/Profile/AdminProfile";
import UsersDetails from "./Component/UsersDetails/UsersDetails.jsx";
import CreateUser from "./Component/CreateUser/CreateUser.jsx";
import Dashboard from "./Component/Dashboard/Dashboard.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import AdminContact from "./Component/Contact/AdminContact.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin } from "./Action/adminAction";
import {
  getTotalUserSaveing,
  getTotalUserLoanDetails,
} from "./Action/userAction";
import UserProfile from "./Component/UsersComponent/UserProfile";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdmin());
    dispatch(getTotalUserSaveing());
    dispatch(getTotalUserLoanDetails());
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.admin);

  return (
    <>
      <Router>
        <Header />
        {isAuthenticated && <AdminOption />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goalandachivment" element={<GoalAndAchivment />} />
          <Route path="/loginadmin" element={<Login />} />
          <Route
            path="/account"
            element={isAuthenticated ? <AdminProfile /> : <Login />}
          />
          <Route
            path="/adminregister"
            element={isAuthenticated ? <Register /> : <Login />}
          />
          <Route
            path="/usersdetails"
            element={isAuthenticated ? <UsersDetails /> : <Login />}
          />
          <Route
            path="/createuser"
            element={isAuthenticated ? <CreateUser /> : <Login />}
          />
          <Route
            path="/dashboardadmin"
            element={isAuthenticated ? <Dashboard /> : <Login />}
          />
          <Route
            path="/contact"
            element={isAuthenticated ? <AdminContact /> : <Contact />}
          />
          <Route
            path="/user/:id"
            element={isAuthenticated ? <UserProfile /> : <Login />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
