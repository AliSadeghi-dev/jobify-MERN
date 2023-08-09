import React, { useReducer, useContext } from "react";
const reducer = require("./reducers");
const axios = require("axios");
const {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_BEGIN_ERROR,
  REGISTER_USER_BEGIN_SUCCESS,
} = require("./actions");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
  token: null,
  userLocation: "",
  jobLocation: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 2000);
  };

  const registerUser = async (currentUser) => {
    console.log("object", currentUser);
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await fetch("/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify(currentUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      const { user, token, location } = res;
      dispatch({
        type: REGISTER_USER_BEGIN_SUCCESS,
        payload: { user, token, location },
      });
    } catch (err) {
      console.log("error",err);
      dispatch({
        type: REGISTER_USER_BEGIN_ERROR,
        payload: { msg: err },
      });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert, registerUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
