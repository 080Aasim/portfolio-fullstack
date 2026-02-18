import { createContext, useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:1308/api/user";

export const PortfolioContext = createContext(null);

export const PortfolioProvider = (props) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchUser(storedToken);
    }
  }, []);

  const fetchUser = async (token) => {
    try {
      const res = await axios.get(`${API}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user.firstName);
    } catch (error) {
      console.log(error);
    }
  };
  const signUp = async (data) => {
    try {
      const { confirmPassword, ...signupData } = data;
      const res = await axios.post(`${API}/sign-up`, signupData);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        setUser(signupData.firstName);
        return { success: true };
      } else {
        return { success: false, message: res.data.message };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Something went wrong",
      };
    }
  };

  const login = async (data) => {
    try {
      const {confirmPassword, ...loginData} = data
      const res = await axios.post(`${API}/login`, loginData)
      if(res.data.success) {
        localStorage.setItem("token",res.data.token)
        setToken(res.data.token)
        setUser(res.data.user.firstName)
        return {success: true}
      } else {
        return {success: false, message: res.data.message}
      }
    } catch (error) {
      return {success: false, message: error.message}
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
    setUser("")
  }

  const contextValue = {
    user,
    signUp,
    token,
    login,
    logout
  };
  return (
    <PortfolioContext.Provider value={contextValue}>
      {props.children}
    </PortfolioContext.Provider>
  );
};
