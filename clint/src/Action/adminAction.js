import axios from "axios";

export const adminRegister =
  (name, email, password, number, avatar, admininvestment) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "RegisterAdminRequest",
      });

      const { data } = await axios.post(
        "/api/v1/adminregister",
        {
          name,
          email,
          password,
          number,
          avatar,
          admininvestment,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "RegisterAdminSuccess",
        payload: data.admin,
      });
    } catch (error) {
      dispatch({
        type: "RegisterAdminFailure",
        payload: error.response.data.message,
      });
    }
  };

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post(
      "/api/v1/adminlogin",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "LoginSuccess",
      payload: data.admin,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

export const AdminInvestmentAdd = (name, amount) => async (dispatch) => {
  try {
    dispatch({
      type: "AdminInvestmentAddRequest",
    });

    const { data } = await axios.post(
      "/api/v1/admininvestmentadd",
      { name, amount },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "AdminInvestmentAddSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "AdminInvestmentAddFailure",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutRequest",
    });

    const { data } = await axios.get("/api/v1/logout");

    dispatch({
      type: "LogoutSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LogoutFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAdmin = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetAdminRequest",
    });

    const { data } = await axios.get("/api/v1/admindetails");

    dispatch({
      type: "GetAdminSuccess",
      payload: data.admin,
    });
  } catch (error) {
    dispatch({
      type: "GetAdminFailure",
      payload: error.response.data.message,
    });
  }
};

export const addProfitToInvest = () => async (dispatch) => {
  try {
    dispatch({
      type: "AddProfitToInvestRequest",
    });

    const { data } = await axios.get("/api/v1/addprofittoinvest");

    dispatch({
      type: "AddProfitToInvestSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "AddProfitToInvestFailure",
      payload: error.response.data.message,
    });
  }
};

export const adminNote = (name, message) => async (dispatch) => {
  try {
    dispatch({
      type: "CreateAdminNoteRequest",
    });

    const { data } = await axios.post(
      "/api/v1/adminnote",
      { name, message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "CreateAdminNoteSuccess",
      payload: data.contact,
    });
  } catch (error) {
    dispatch({
      type: "CreateAdminNoteFailure",
      payload: error.response.data.message,
    });
  }
};
export const getNote = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetAdminNoteRequest",
    });

    const { data } = await axios.get("/api/v1/getnotes");

    dispatch({
      type: "GetAdminNoteSuccess",
      payload: data.notes,
    });
  } catch (error) {
    dispatch({
      type: "GetAdminNoteFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteAdminNoteRequest",
    });

    const { data } = await axios.delete(`/api/v1/deletenote/${id}`);

    dispatch({
      type: "DeleteAdminNoteSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteAdminNoteFailure",
      payload: error.response.data.message,
    });
  }
};
