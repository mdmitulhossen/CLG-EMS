import React from 'react';
import { Breadcrumb, Button, Modal } from 'antd';
import { NavLink } from 'react-router-dom';
import EmployeeHeadCard from '../components/EmployeeCard/EmployeeHeadCard';
import EmCard from '../components/EmployeeCard/EmCard';
import EmployeeCard from '../components/EmployeeCard/EmployeeCard';
import { useAuth } from '../Context/AuthContext';
import { BaseUrl } from '../utils/BaseUrl';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLogin } from '../Context/loginContext';
import { toast } from 'react-toastify';

const AllEmployee = () => {
    const [auth, setAuth] = useAuth();
    const [userLogin, setUserLogin] = useLogin()

    const [loading, setLoading] = useState(false);
     const [open1, setOpen1] = useState(false);
     const [open2, setOpen2] = useState(false);
     const [employeeData, setEmployeeData] = useState([]);

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [position, setPosition] = useState("");
     const [contactNo, setContactNo] = useState("");
     const [age, setAge] = useState(0);
     const [address, setAddress] = useState("");

     const [deleteEmail, setDeleteEmail] = useState("");

console.log("addEmployee",auth)

     const addEmployee = async () => {
            try {
                const res = await axios.post(`${BaseUrl}/employee`,{
                    name,
                    email,
                    password,
                    position,
                    contactNo,
                    age,
                    address
                });
                console.log(res.data)
            
                toast.success("Employee Added Successfully!!");
                window.location.reload()
            } catch (error) {
                console.log(error)
            }
     }
     
     const deleteEmployee = async () => {
        console.log(deleteEmail)
        const filterData = auth.users.filter((data)=>data.email === deleteEmail)
        console.log(filterData)
        try {
            const res = await axios.delete(`${BaseUrl}/employee/delete/${filterData[0]._id}`);
            console.log(res.data)
        
            toast.success("Employee Deleted Successfully!!");
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
     }

    // //  call api
    //  const getEmployee = async () => {
    //     try {
    //         const res = await axios.get(`${BaseUrl}/employee`);
    //         console.log(res.data)
    //         setEmployeeData(res.data)
    //         setAuth({ ...auth, users: res.data })
    //     } catch (error) {
    //         console.log(error)
    //     }
    //  }
    //  useEffect(() => {
    //     getEmployee()
    //  }, [])


     
     const showModal1 = () => {
       setOpen1(true);
     };
     const showModal2 = () => {
       setOpen2(true);
     };
     const handleOk = () => {
       setLoading(true);
       setTimeout(() => {
         setLoading(false);
         setOpen1(false);
         setOpen2(false);
       }, 3000);
     };
     const handleCancel = () => {
       
       setOpen1(false);
       setOpen2(false);
     };
    console.log(BaseUrl)
    return (
        <div>
            {/* Breadcrumb home>project */}
            <div className='mb-5'>
                <Breadcrumb
                    items={[
                        {
                            title: <NavLink className='dark:text-white' to='/'>Home</NavLink>,
                        },
                        {
                            title: <NavLink className='dark:text-white' to='/allEmployee'>All-Employee</NavLink>,
                        },

                    ]}

                />


                <div className='mt-10'>
                    <div className='grid grid-cols-12 gap-5'>
                        <EmCard name="Md Fahim"/>
                        <EmployeeHeadCard />
                        <EmCard name="Md Faisol"/>
                    </div>

                    <div className='mt-16'>

                        <div className="col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
                            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between" >
                                <h2 className="font-bold text-2xl text-slate-800 dark:text-slate-100">All Employee</h2>
                                <div>
                                    <input type="text" className='rounded-lg focus:border-[#1E293B]' placeholder="search here.."/>
                                <button className='bg-[#1E293B] ml-4 hover:bg-[#1E293B]/80 duration-200 dark:bg-blue-500 dark:hover:bg-blue-400 text-white text-md font-semibold px-4 py-2 rounded-lg'>View All</button>
                                {
                                       userLogin.company && <button onClick={()=>showModal1()} className='bg-[#1E293B] ml-4 hover:bg-[#1E293B]/80 duration-200 dark:bg-blue-500 dark:hover:bg-blue-400 text-white text-md font-semibold px-4 py-2 rounded-lg'>Add</button>
                                }
                                {
                                      userLogin.company && <button onClick={()=>showModal2()} className='bg-[#1E293B] ml-4 hover:bg-[#1E293B]/80 duration-200 dark:bg-blue-500 dark:hover:bg-blue-400 text-white text-md font-semibold px-4 py-2 rounded-lg'>Delete</button>
                                       
                                }
                                </div>
                            </header>

                            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
                                {
                               auth.users?.map((data,i)=>{
                                return(
                                    <EmployeeCard key={i} name={data.name} position={data.position}/>
                                )
                               })
                                }
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>


     <Modal
        open={open1}
        title="Add Employee"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button  className='bg-red-500 font-semibold text-white' key="back" onClick={addEmployee}>
            ADD
          </Button>,
        ]}
      >

        {/* employee add form */}
        <form action="">
            <div className='grid grid-cols-2 gap-5'>
                <div className='col-span-full'>
                    <label for="name">Name</label>
                    <input onChange={(e)=>setName(e.target.value)} id='name' type="text" className='border border-gray-300 rounded-lg focus:border-[#1E293B] focus:outline-none px-4 py-2 w-full'/>
                </div>
                <div className='col-span-full'>
                    <label for="email">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} id='email' type="email" className='border border-gray-300 rounded-lg focus:border-[#1E293B] focus:outline-none px-4 py-2 w-full'/>
                </div>
                <div className='col-span-full'>
                    <label for="pass">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} id='pass' type="password" className='border border-gray-300 rounded-lg focus:border-[#1E293B] focus:outline-none px-4 py-2 w-full'/>
                </div>
                <div>
                    <label for="pos">Position</label>
                    <input onChange={(e)=>setPosition(e.target.value)} id='pos' type="text" className='border border-gray-300 rounded-lg focus:border-[#1E293B] focus:outline-none px-4 py-2 w-full'/>
                </div>
                <div>
                    <label for="age">Age</label>
                    <input onChange={(e)=>setAge(e.target.value)} id='age' type="number" className='border border-gray-300 rounded-lg focus:border-[#1E293B] focus:outline-none px-4 py-2 w-full'/>
                </div>
                <div className='col-span-full'>
                    <label for="ContactNo">ContactNo</label>
                    <input onChange={(e)=>setContactNo(e.target.value)} id='ContactNo' type="text" className='border border-gray-300 rounded-lg focus:border-[#1E293B] focus:outline-none px-4 py-2 w-full'/>
                </div>
                <div className='col-span-full'>
                    <label for="add">Address</label>
                    <input onChange={(e)=>setAddress(e.target.value)} id='add' type="text" className='border border-gray-300 rounded-lg focus:border-[#1E293B] focus:outline-none px-4 py-2 w-full'/>
                </div>
            </div>
        </form>
       
      </Modal>

{/* modal 2 */}
      <Modal
        open={open2}
        title="Delete Employee"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button  className='bg-red-500 font-semibold text-white' key="back" onClick={deleteEmployee}>
            Delete
          </Button>,
        ]}
      >

        {/* employee add form */}
        <form action="">
            <div className='grid grid-cols-2 gap-5'>
            
                <div className='col-span-full'>
                    <label for="email">Email</label><br />
                    <select id='email' className='w-full' onChange={(e)=>setDeleteEmail(e.target.value)}>
                        <option value="" selected disabled>Select Email</option>
                    {
                               auth.users?.map((data,i)=>{
                                return(
                                    <option key={i}  value={data.email}>{data.email}</option>
                                )
                               })
                        }
                    </select>
                   
                </div>
             
          
        
            </div>
        </form>
       
      </Modal>
        </div>
    );
};

export default AllEmployee;