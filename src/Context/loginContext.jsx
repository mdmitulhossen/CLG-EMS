import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";
import { BaseUrl } from "../utils/BaseUrl";


const LoginContext = createContext();

const LoginProvider = ({ children }) => {
	const [userLogin, setUserLogin] = useState({
		  company: false,
          employee:false,
		  admin:false,
           users:null,
	});

    // const companyData = localStorage.getItem("companyData")
    // setUserLogin({ ...userLogin, users: JSON.parse(companyData) })

    useEffect(()=>{
        const companyData = JSON.parse(localStorage.getItem("companyData")) 
        const data = {
            company: companyData?.company ? true : false,
            employee: companyData?.employee ? true : false,
            admin: companyData?.admin ? true : false,
            users: companyData
        }
        if(companyData) setUserLogin(data)
    },[])

	    // //  call api
		// const getEmployee = async () => {
		// 	try {
		// 		const res = await axios.get(`${BaseUrl}/employee`);
		// 		console.log(res.data)
		// 		setAuth({ ...auth, users: res.data })
		// 	} catch (error) {
		// 		console.log(error)
		// 	}
		//  }
		//  useEffect(() => {
		// 	getEmployee()
		//  }, [])


	return (
		<LoginContext.Provider value={[userLogin, setUserLogin]}>
			{children}
		</LoginContext.Provider>
	);
};

const useLogin = () => useContext(LoginContext);

export { useLogin, LoginProvider };







