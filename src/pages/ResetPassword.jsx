import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import {useResetPasswordMutation} from '../services/userApi'
import { toast } from 'react-toastify';
import {Link, useParams, useNavigate} from 'react-router-dom'



const ResetPassword = () => {
  const [password, setNewPassword] = useState("");
  const [corfirmpassword, setCornfirmPassword] = useState("");

  const [resetPassword] = useResetPasswordMutation()

  const navigate = useNavigate();
  const { resetToken } = useParams();


    const reset = async (e)  => {
    e.preventDefault();
    try {
        
    
    if (password.length < 6) {
        return toast.error("Passwords must be up to 6 characters");
    }
    if (password !== corfirmpassword) {
        return toast.error("Passwords do not match");
    }

    const data= {
        password:password,
        resetToken:resetToken
    }
    await resetPassword(data).unwrap();
    toast.success("New password was successfully");
    navigate("/login")
    console.log(password, corfirmpassword);

        } catch (error) {
            console.log(error)
        }

    }


  return (
    <div className="login flex justify-center items-center h-screen">
         <Card className='bg-white px-6 py-5' shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center">
        Login
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={reset}>
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="New Password" 
          id="password"
          type="password"
          value={password}
          onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input type="password" size="lg" label="Confirm Password" 
          id="corfirmpassword"
          value={corfirmpassword}
          onChange={(e) => setCornfirmPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="mt-6 bg-[#489EE7]" fullWidth>
          Reset Password
        </Button>
      </form>
      <Link to='/forgot-password' className="text-[#489EE7] mt-6 mb-3">Forgot Password</Link>
    </Card>
    </div>
  )
}

export default ResetPassword