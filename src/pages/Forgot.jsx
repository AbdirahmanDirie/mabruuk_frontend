import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import {useForgotPasswordMutation} from '../services/userApi'
import { toast } from 'react-toastify';
import {Link, useNavigate} from 'react-router-dom'



const Forgot = () => {
  const [email, setEmail] = useState("");

  const [forgotPassword] = useForgotPasswordMutation()

  const navigate = useNavigate();
  

  useEffect(() => {


    // navigate("/login");
    // if(isError){
    //   toast.error(error.data.msg)
    // }
   
  },[]);


    const Forgot = async (e)  => {
    e.preventDefault();
    console.log(email)
    const data ={
        email: email,
    }
    try {
        await forgotPassword(data);
    } catch (error) {
        console.log(error)
    }
      
    }


  return (
    <div className="login flex justify-center items-center h-screen">
         <Card className='bg-white px-6 py-5' shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center">
        Forgot Password
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={Forgot}>
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Email" 
          id="username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button type="submit" className="mt-6 bg-[#489EE7]" fullWidth>
          Forgot Password
        </Button>
      </form>
      <Link to='/login' className="mt-6 mb-3">Go to <span className="text-[#489EE7]">Login</span> </Link>
    </Card>
    </div>
  )
}

export default Forgot