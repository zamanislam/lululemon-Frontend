import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import '../styles/Signup.css'

const Signup = () => {
    const [data,setData]=useState({
        username:"",
        email:"",
        password:"",
        role:""
    })
    const [error,setError]=useState("")

    const handleSignup=(e)=>{
      const {name,value}=e.target

      setData(prev=>{
        return{
            ...prev,
            [name]:value
        }
      })
    }
    const navigate=useNavigate()
    const handleRegister=async()=>{
        try {
            const response=await axios.post(`${import.meta.env.VITE_API_URL}/users/register`,data)
            if(response.status===201){
                alert("You are successfully registered,please login")
                  navigate("/login")
            }
        } catch (error) {
            setError("Registration failed,Please try again")
        }
    }
  return (
    <div className="flex flex-col gap-2 max-w-[500px] m-auto mt-[100px]">
      <h3 id="top" className="text-lg font-bold pl-44">Please Signup</h3>
      {error && <p className="text-red-500">{error}</p>}
      <input
        id="username"
        placeholder="ENTER USENAME"
        className="border-black border rounded-sm"
        type="text"
        name="username"
        onChange={(e)=>handleSignup(e)}
        value={data.username}
      />
        <input
        id="email"
        placeholder="ENTER EMAIL"
        className="border-black border rounded-sm"
        type="email"
        name="email"
        onChange={(e)=>handleSignup(e)}
        value={data.email}
      />
      <input
        id="password"
        placeholder="ENTER PASSWORD"
        className="border-black border rounded-sm"
        type="password"
        name="password"
        onChange={(e)=>handleSignup(e)}
        value={data.password}
      />
      <select onChange={(e)=>handleSignup(e)} value={data.role} className="border-black border rounded-sm" name="role" id="role">
        <option value="">Select user role</option>
        <option value="reader">Reader</option>
        <option value="author">Author</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleRegister} id="signup" className=" text-white p-2">Signup</button>
    </div>
  );
};

export default Signup;
