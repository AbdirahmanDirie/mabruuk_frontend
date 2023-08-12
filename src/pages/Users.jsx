import { useState, useEffect } from "react";
import {
  BsPlusSquare,
  BsTrash,
  BsSearch,
  BsPencilSquare,
} from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

import { toast } from "react-toastify";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar
} from "@material-tailwind/react";

import { 
  useGetUsersQuery, 
  useRegisterUserMutation, 
  useUpdateUserMutation,
  useDeleteUserMutation
} from "../services/userApi";

const TABLE_HEAD = ["Service Type", "Type", "Actions"];


const Users = () => {
    const [open, setOpen] = useState(false);
  const [viewData, setViewData] = useState();
  const [Viewopen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [userId, setUserId] = useState(false);

  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    phone:'',
    type:'',
    email:'',
    password:''
  });

  const {firstName, lastName, phone, type, email, password} = formData;

  const handleViewOpen = () => setViewOpen(!Viewopen);

  const handleOpen = () => setOpen(!open);
  const handleEdit = () => setEditOpen(!editOpen);

  // api services
  const { data, isLoading } = useGetUsersQuery();
  const [registerUser] = useRegisterUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const user = JSON.parse(localStorage.getItem("user"));


  const loggedInUserId = user?.id;



  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const EditOnChange = (e) => {
    setViewData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
  }, [data]);


  const viewDetails = (id) => {
    let eProfile =
      data &&
      data.find((item) => {
        return item?._id === id;
      });
    handleViewOpen();
    setViewData(eProfile);
    setUserId(eProfile?._id);
  };

  const EditDetails = (id) => {
    let eProfile =
      data &&
      data.find((item) => {
        return item?._id === id;
      });
    handleEdit();
    setUserId(eProfile?._id);
    setViewData(eProfile);
  };


  const OnSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = user.token;
      const formData = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone,
        type:type,
        password:password
      };
      await registerUser({ token, formData }).unwrap();
      toast.success("User Registed successfully");
      setFormData({
        firstName:'',
        lastName:'',
        phone:'',
        type:'',
        email:'',
        password:''
      });
      handleOpen();
    } catch (error) {
      toast.error(error.data.msg);
      //   alert(error.data)
    }
  };


  const EditOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = user.token;
      const formData = {
        firstName:viewData?.firstName,
        lastName:viewData?.lastName,
        email:viewData?.email,
        phone:viewData?.phone,
        type:viewData?.type,
      };
      const id = userId;
      await updateUser({ token, formData, id }).unwrap();
      toast.success("User Updated successfully");
      setFormData({
        firstName:'',
        lastName:'',
        phone:'',
        type:'',
        email:'',
        password:''
      });
      handleEdit();
    } catch (error) {
        console.log(error.data)
      toast.error(error.data.msg);
      //   alert(error.data)
    }
  };


  const handleDelete = async (id) => {
    try {
      const result = confirm("Are you sure you want to delete?");
      const token = user.token;
      if (result) {
        await deleteUser({id, token}).unwrap();
        toast.success("User deleted successfully")
      }
    } catch (error) {
      toast.error(error.data.msg);
    }
    
  };

  return (
    <div className="bg-[#EDF0F5] h-[100vh] px-5 py-5">
        {/*Register User model  */}
      <Dialog open={open} handler={handleOpen} className="" size="xl">
        <div className="">
          <DialogHeader className="text-[#489EE7]">
           Registe User Form
          </DialogHeader>
          {/* <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} /> */}
        </div>
        <DialogBody className="">
          <form onSubmit={OnSubmit}>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-3 mt-2">
            <div className="flex flex-col space-y-2">
                <label>First Name</label>
                <input
                required
                  value={firstName}
                  name="firstName"
                  type="text"
                  onChange={onChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
            <div className="flex flex-col space-y-2">
                <label>Last Name</label>
                <input
                required
                  value={lastName}
                  name="lastName"
                  type="text"
                  onChange={onChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
            <div className="flex flex-col space-y-2">
                <label>Phone</label>
                <input
                required
                  value={phone}
                  name="phone"
                  type="number"
                  onChange={onChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
            <div className="flex flex-col space-y-2">
                <label>Email</label>
                <input
                required
                  value={email}
                  name="email"
                  type="text"
                  onChange={onChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label>Type</label>
                <select
                required
                  onChange={onChange}
                  className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                  name="type"
                  value={type}
                  id="type"
                >
                  <option value="admin">admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label>Password</label>
                <input
                required
                  value={password}
                  name="password"
                  type="password"
                  onChange={onChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button
                variant="gradient"
                type="submit"
                color="blue"
                size="lg"
                className=""
              >
                Register
              </Button>
            </div>
          </form>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button>
        </DialogFooter>
      </Dialog>
      
        {/*Edit User model  */}
      <Dialog open={editOpen} handler={handleEdit} className="" size="xl">
        <div className="">
          <DialogHeader className="text-[#489EE7]">
           Registe User Form
          </DialogHeader>
          {/* <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} /> */}
        </div>
        <DialogBody className="">
          <form onSubmit={EditOnSubmit}>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-3 mt-2">
            <div className="flex flex-col space-y-2">
                <label>First Name</label>
                <input
                required
                  value={viewData?.firstName}
                  name="firstName"
                  type="text"
                  onChange={EditOnChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
            <div className="flex flex-col space-y-2">
                <label>Last Name</label>
                <input
                required
                  value={viewData?.lastName}
                  name="lastName"
                  type="text"
                  onChange={EditOnChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
            <div className="flex flex-col space-y-2">
                <label>Phone</label>
                <input
                required
                  value={viewData?.phone}
                  name="phone"
                  type="number"
                  onChange={EditOnChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
            <div className="flex flex-col space-y-2">
                <label>Email</label>
                <input
                required
                  value={viewData?.email}
                  name="email"
                  type="text"
                  onChange={EditOnChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label>Type</label>
                <select
                required
                  onChange={EditOnChange}
                  className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                  name="type"
                  value={viewData?.type}
                  id="type"
                >
                  <option value="admin">admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button
                variant="gradient"
                type="submit"
                color="blue"
                size="lg"
                className=""
              >
                Update
              </Button>
            </div>
          </form>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleEdit}>
            close
          </Button>
        </DialogFooter>
      </Dialog>
        {/* View Data Model */}
        <Dialog open={Viewopen} handler={handleViewOpen} size="xl">
        <DialogHeader>View Event Booking</DialogHeader>
        <DialogBody divider className="p-10">
          <div className="table-horizontal-container">
            <div className="flex justify-center my-4">
            <Avatar src={viewData?.image?.filePath} alt={viewData?.image?.fileName}  variant="rounded" size="xxl" withBorder={true} color="blue" className="p-0.5" />
            </div>
            <table className="unfixed-table w-full mb-10">
              <tbody>
                <tr>
                  <th>First Name</th>
                  <td>{viewData?.firstName}</td>
                  <th>Last Name</th>
                  <td>{viewData?.lastName}</td>
                </tr>

                <tr>
                <th className="">Phone</th>
                  <td className="">{viewData?.phone}</td>
                  <th>Type</th>
                  <td>{viewData?.type}</td>
                </tr>

                <tr>
                <th>Email</th>
                  <td>{viewData?.email}</td>
                  <th>Status</th>
                  <td>{viewData?.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DialogBody>
      </Dialog>

        {/* Table */}
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-20 md:mb-10">
            <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <Typography variant="h5" className="text-[#489EE7]">
                Users List
              </Typography>
              {user.type === 'admin' ? (

              <Button
                className="flex items-center gap-3 bg-[#489EE7] rounded-sm justify-center"
                size="sm"
                onClick={handleOpen}
              >
                <BsPlusSquare className="h-7 w-7" />
                Register user
              </Button>
              ) : ("")}
            </div>

          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          {data || !isLoading ? (
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => {
                  const isLast = item?._id === data.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr key={item?._id}>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item?.firstName}  {item?.lastName}
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item?.type}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        {user?.type === 'admin' ? (
                            <div className="flex space-x-2">
                          <AiOutlineEye
                            className="h-5 w-5 cursor-pointer hover:text-amber-300"
                            onClick={() => viewDetails(item?._id)}
                          />
                          <BsPencilSquare
                            className="h-5 w-5 cursor-pointer hover:text-amber-300"
                            onClick={() => EditDetails(item?._id)}
                          /> 

                          {item?._id === loggedInUserId
                            ? (
                              <p className="text-yellow-900">Your Profile</p>
                            ):(
                              <BsTrash className="h-5 w-5 cursor-pointer  hover:text-[#489EE7]" onClick={() => handleDelete(item?._id)}/>
                            )
                          }
                                              
                        </div>
                          ) 
                        : (
                            <p className="text-amber-900">Only admin can access</p>
                            )}
                        
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p>Loading...</p>
          )}
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" color="blue-gray" size="sm">
              Previous
            </Button>
            <Button variant="outlined" color="blue-gray" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card> 
    </div>
  )
}

export default Users