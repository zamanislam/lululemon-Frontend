import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/Signup.css'

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    });
  const [error, setError] = useState("");

  const handleData = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/login`,
        data
      );
      console.log(response)
      if (response.status === 200) {
        localStorage.setItem("token",response.data.accessToken)
        localStorage.setItem("userId",response.data.userId)
        localStorage.setItem('username', data.username)
        alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error)
      setError(error.response.data.err);
    }
  };
  return (
    <div className="flex flex-col gap-2 max-w-[500px] m-auto mt-[100px]">
      <h3 id="top"  className="text-lg font-bold">Please Login</h3>
      {error && <p className="text-red-500">{error}</p>}
      <input
        id="username"
        placeholder="ENTER USENAME"
        className="border-black border rounded-sm"
        type="text"
        name="username"
        onChange={(e)=>handleData(e)}
        value={data.username}
      />
     
      <input
        id="password"
        placeholder="ENTER PASSWORD"
        className="border-black border rounded-sm"
        type="password"
        name="password"
        onChange={(e)=>handleData(e)}
        value={data.password}
      />
      <button onClick={handleLogin} id="signup" className=" text-white p-2">Login</button>
    </div>
  );
};

export default Login;
