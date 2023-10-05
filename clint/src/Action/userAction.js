import axios from "axios";

export const userCreate =
  (trxid, name, email, number, avatar, nationalid, perday) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "UserCreatedRequest",
      });

      const { data } = await axios.post(
        "/api/v1/userregister",
        {
          trxid,
          name,
          email,
          number,
          avatar,
          nationalid,
          perday,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const userId = data.user._id;

      dispatch({
        type: "UserCreatedSuccess",
        payload: data.user,
      });

      return userId;
    } catch (error) {
      dispatch({
        type: "UserCreatedFailure",
        payload: error.response.data.message,
      });
    }
  };

export const userProfile = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GetUserDetailsRequest",
    });

    const { data } = await axios.get(`/api/v1/userdetails/${id}`);

    dispatch({
      type: "GetUserDetailsSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "GetUserDetailsFailure",
      payload: error.response.data.message,
    });
  }
};

export const GetAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetAllUsersRequest",
    });

    const { data } = await axios.get("/api/v1/getallusers");

    dispatch({
      type: "GetAllUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "GetAllUsersFailure",
      payload: error.response.data.message,
    });
  }
};

export const updateUser =
  (
    trxid,
    name,
    avatar,
    email,
    number,
    nationalid,
    totalsaveing,
    totalloan,
    totalpaidloan,
    totaldueloan,
    perday,
    id
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "UpdateUserRequest",
      });

      const { data } = await axios.put(
        `/api/v1/updateuser/${id}`,
        {
          trxid,
          name,
          avatar,
          email,
          number,
          nationalid,
          totalsaveing,
          totalloan,
          totalpaidloan,
          totaldueloan,
          perday,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "UpdateUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "UpdateUserFailure",
        payload: error.response.data.message,
      });
    }
  };

export const AddWidraw = (amount, id) => async (dispatch) => {
  try {
    dispatch({
      type: "AddWidrawRequest",
    });

    const { data } = await axios.post(
      `/api/v1/addwidraw/${id}`,
      {
        amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "AddWidrawSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "AddWidrawFailure",
      payload: error.response.data.message,
    });
  }
};

export const DailySaveingAdd = (amount, id) => async (dispatch) => {
  try {
    dispatch({
      type: "DailySaveingAddRequest",
    });

    const { data } = await axios.post(
      `/api/v1/dailysaveingadd/${id}`,
      {
        amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "DailySaveingAddSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DailySaveingAddFailure",
      payload: error.response.data.message,
    });
  }
};

export const AddMonthlySaveing = (amount, id) => async (dispatch) => {
  try {
    dispatch({
      type: "MonthlySaveingAddRequest",
    });

    const { data } = await axios.post(
      `/api/v1/addmonthlysaveing/${id}`,
      {
        amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "MonthlySaveingAddSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "MonthlySaveingAddFailure",
      payload: error.response.data.message,
    });
  }
};

export const DailyPaidLoanAdd = (amount, id) => async (dispatch) => {
  try {
    dispatch({
      type: "DailyPaidLoanAddRequest",
    });

    const { data } = await axios.post(
      `/api/v1/dailypaidloanadd/${id}`,
      {
        amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "DailyPaidLoanAddSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DailyPaidLoanAddFailure",
      payload: error.response.data.message,
    });
  }
};

export const AddMonthlyPaidLoan = (amount, id) => async (dispatch) => {
  try {
    dispatch({
      type: "MonthlyPaidLoanAddRequest",
    });

    const { data } = await axios.post(
      `/api/v1/addmonthlypaidloan/${id}`,
      {
        amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "MonthlyPaidLoanAddSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "MonthlyPaidLoanAddFailure",
      payload: error.response.data.message,
    });
  }
};

export const AddTotalLoan = (totalloan, id) => async (dispatch) => {
  try {
    dispatch({
      type: "AddTotalLoanRequest",
    });

    const { data } = await axios.post(
      `/api/v1/addtotalloan/${id}`,
      {
        totalloan,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "AddTotalLoanSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "AddTotalLoanFailure",
      payload: error.response.data.message,
    });
  }
};

export const DeleteProfile = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteUserRequest",
    });

    const { data } = await axios.delete(`/api/v1/deleteuser/${id}`);

    dispatch({
      type: "DeleteUserSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const getTotalUserSaveing = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetTotalUserSaveingRequest",
    });

    const { data } = await axios.get("/api/v1/totalusersaveing");

    dispatch({
      type: "GetTotalUserSaveingSuccess",
      payload: data.totalsaveing,
    });
  } catch (error) {
    dispatch({
      type: "GetTotalUserSaveingFailure",
      payload: error.response.data.message,
    });
  }
};
export const getTotalUserLoanDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetTotalUserLoanDetailsRequest",
    });

    const { data } = await axios.get("/api/v1/totalusersloandetails");

    dispatch({
      type: "GetTotalUserLoanDetailsSuccess",
      payload: data.loanDetails,
    });
  } catch (error) {
    dispatch({
      type: "GetTotalUserLoanDetailsFailure",
      payload: error.response.data.message,
    });
  }
};

export const contact = (name, email, message) => async (dispatch) => {
  try {
    dispatch({
      type: "CreateUserContactRequest",
    });

    const { data } = await axios.post(
      "/api/v1/contact",
      { name, email, message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "CreateUserContactSuccess",
      payload: data.contact,
    });
  } catch (error) {
    dispatch({
      type: "CreateUserContactFailure",
      payload: error.response.data.message,
    });
  }
};
export const message = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetUserMessageRequest",
    });

    const { data } = await axios.get("/api/v1/getmessage");

    dispatch({
      type: "GetUserMessageSuccess",
      payload: data.messages,
    });
  } catch (error) {
    dispatch({
      type: "GetUserMessageFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteMessage = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteUserMessageRequest",
    });

    const { data } = await axios.delete(`/api/v1/deletemessage/${id}`);

    dispatch({
      type: "DeleteUserMessageSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteUserMessageFailure",
      payload: error.response.data.message,
    });
  }
};
