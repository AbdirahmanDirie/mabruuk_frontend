import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import {useLoginUserMutation} from '../services/userApi'
import { toast } from 'react-toastify';
import {Link, useNavigate} from 'react-router-dom'



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginUser, {data, isError, error}] = useLoginUserMutation();

  const navigate = useNavigate();


  useEffect(() => {
    if(data && data.token){
       localStorage.setItem(
            "user",
            JSON.stringify({
              token: data.token,
              email: data.email,
              image: data.image,
              phone: data.phone,
              firstName: data.firstName,
              lastName: data.lastName,
              type: data.type,
              id: data._id,
            })
          );
          setEmail("");
          setPassword("");
          navigate("/");
          }
          const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      // Reload the page to update the login state
      window.location.reload();
    }

    if(isError){
      toast.error(error.data.msg)
    }
   
  },[data, isError]);


    const login = async (e)  => {
    e.preventDefault();
      await loginUser({email, password});
    }


  return (
    <div className="login flex justify-center items-center h-screen">
         <Card className='bg-white px-6 py-5' shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center">
        Login
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={login}>
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Email" 
          id="username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <Input type="password" size="lg" label="Password" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="mt-6 bg-[#489EE7]" fullWidth>
          Login
        </Button>
      </form>
      <Link to='/forgot-password' className="text-[#489EE7] mt-6 mb-3">Forgot Password</Link>
    </Card>
    </div>
  )
}

export default Login