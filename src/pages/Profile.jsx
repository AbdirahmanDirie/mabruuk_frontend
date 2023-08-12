import { useState, useEffect } from "react";
import {
  Card,
  Input,
  Typography,
  Button
} from "@material-tailwind/react";
import Avatar from 'react-avatar';
import {useParams} from 'react-router-dom'
import { 
  useGetUsersQuery, 
  useUpdateUserMutation,
  useChangeUserPasswordMutation,
  useUpdateUserImageMutation
} from "../services/userApi";
import { toast } from "react-toastify";


const Profile = () => {
 const [userDetail, setUserDetail] = useState();
 const [passwordData, setPasswordData] =useState({
  oldPassword:'',
  newPassword:'',
});

const [image, setImage] = useState("");
const [imagePreview, setImagePreview] = useState(null);

  const {id} = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  // api services
  const { data } = useGetUsersQuery();
  const [updateUser] = useUpdateUserMutation();
  const [changeUserPassword] = useChangeUserPasswordMutation();
  const [updateUserImage] = useUpdateUserImageMutation();


  const userDetails =(id)=>{
    let eProfile = data?.find((user)=>{
    return user?._id === id
    });
    setUserDetail(eProfile);
 }



 const profileOnChange = (e) => {
  setUserDetail((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};

//input Password On change
const PasswordOnChange = (e) => {
  setPasswordData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))   
  }

  // Image change input
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

 useEffect(()=>{
  userDetails(id);
},[id, data])


const OnSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = user.token;
    const formData = {
      firstName:userDetail?.firstName,
      lastName:userDetail?.lastName,
      email:userDetail?.email,
      phone:userDetail?.phone
    };
    const id = userDetail._id
    await updateUser({ token, formData, id }).unwrap();
    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error(error.data.msg);
    //   alert(error.data)
  }
};


const PasswordOnSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = user.token;
    const passwordDetails = {
      oldPassword: passwordData?.oldPassword, 
      newPassword: passwordData?.newPassword,
    };
    const id = userDetail._id;
    console.log(token, passwordDetails, id);
    await changeUserPassword({ token, passwordDetails, id }).unwrap();
    toast.success("Password updated successfully");
  } catch (error) {
    console.log(error)
    toast.error(error.data.msg);
    //   alert(error.data)
  }
  }

  const ImageOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = user.token;
      const formData = new FormData();
      formData.append("image", image);
      const _id = userDetail._id
      console.log(formData, _id)
      await updateUserImage({ token, formData, id }).unwrap();
      toast.success("Password updated successfully");
    } catch (error) {
    toast.error(error.data.msg);
    }
    
    }


  return (
    <div className='bg-[#EDF0F5] h-[100vh] px-5 py-5 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-6'>

      <div className='col-span-2 md:mb-10'>
        <Card className="rounded-md p-6">

        <Typography variant="h4" color="green">
        Update Profile
      </Typography>
      {/* personal Information */}
          <form className='mt-5' onSubmit={OnSubmit}>
          <Typography variant="h6">Personal Information</Typography>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Input size="lg" label="First Name" value={userDetail?.firstName} name="firstName" onChange={profileOnChange}/>
            <Input size="lg" label="Last Name" value={userDetail?.lastName} name="lastName" onChange={profileOnChange}/>
            <Input size="lg" label="Email" value={userDetail?.email} name="email" onChange={profileOnChange}/>
            <Input size="lg" label="Phone" value={userDetail?.phone} name="phone" onChange={profileOnChange}/>
          </div>
          <Button type='submit' size="md">Update</Button>
          </form>

          {/* password */}
          <form className='mt-5' onSubmit={PasswordOnSubmit}>
          <Typography variant="h6">Password</Typography>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Input size="lg" 
            label="Old Password" 
            name="oldPassword"
            type="password"
            value={passwordData?.oldPassword}
            onChange={PasswordOnChange}
            required
            />
            <Input size="lg" 
            label="New Password" 
            name="newPassword"
            type="password"
            value={passwordData?.newPassword}
            onChange={PasswordOnChange}
            required
            />
          </div>
          <Button type='submit' size="md">Change Password</Button>
          </form>


          {/* Image Update */}
          <form className='mt-5' onSubmit={ImageOnSubmit}>
          <Typography variant="h6">Image</Typography>
          <div className="mb-4 grid grid-cols-1 gap-6 mt-4">
           
            {imagePreview != null ? (
              <div >
                <img src={imagePreview} alt="user" className="h-[170px] w-[170px] object-cover max-h-[200px] max-w-[250px]"/>
              </div>
            ) : (
              <div>
                 {user?.image?.filePath ? <img src={user?.image?.filePath} alt={user?.image?.fileName} className='h-[200px] w-[230px] object-cover cursor-pointer rounded mt-2' /> : <Avatar size="200" className='object-fill cursor-pointer rounded mt-2' name={user && user?.firstName} /> }
              </div>
             
            )}

          <Input size="lg" label="Image" type='file' 
            name="image"
            onChange={(e) => handleImageChange(e)}
            />
          </div>
          <Button type='submit' size="md">Update Image</Button>
          </form>
        </Card>
      </div>

      <div className='col-span-1'>
        <Card className="rounded-md p-6 flex items-center">
        {
          userDetail?.image?.filePath ? (
             <img src={userDetail?.image?.filePath} alt={userDetail?.image?.fileName} className='h-[120px] w-[120px] object-cover rounded shadow-lg' />
          ) :(
            <Avatar className='h-[90px] w-[90px] object-cover rounded mb-4' name={userDetail && userDetail.firstName} />
          )
        }
       
        
         
         <div className='mt-6 w-full flex flex-col gap-2'> 
          <p className='font-semibold'>Name: <span className='font-normal'>{userDetail?.firstName} {userDetail?.lastName}</span></p>
          <p className='font-semibold'>phone: <span className='font-normal'>{userDetail?.phone}</span></p>
          <p className='font-semibold'>Email: <span className='font-normal'>{userDetail?.email}</span></p>
        </div>
        </Card>
      </div>
    </div>
  )
}

export default Profile