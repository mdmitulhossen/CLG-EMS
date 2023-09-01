import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";
import { BaseUrl } from "../utils/BaseUrl";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({
		  company: false,
		  employee:false,
           users:[],
	});

	    //  call api
		const getEmployee = async () => {
			try {
				const res = await axios.get(`${BaseUrl}/employee`);
				console.log(res.data)
				setAuth({ ...auth, users: res.data })
			} catch (error) {
				console.log(error)
			}
		 }
		 useEffect(() => {
			getEmployee()
		 }, [])

	// axios config
	// axios.defaults.baseURL =`https://book-nest-backend.onrender.com`;
	// axios.defaults.baseURL = "http://localhost:8000/api/v1";
	// axios.defaults.headers.common["Authorization"] = auth?.token;

	// useEffect(() => {
	// 	const data = localStorage.getItem("auth");
	// 	if (data) {
	// 		const parsed = JSON.parse(data);
	// 		setAuth({ ...auth, user: parsed.user, token: parsed.token });

	// 	}
	// }, []);

	return (
		<AuthContext.Provider value={[auth, setAuth]}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };







