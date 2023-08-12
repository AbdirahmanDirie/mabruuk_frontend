import React,{useState} from 'react'
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
} from "@material-tailwind/react";
import { BsPlusSquare, BsSearch, BsPencilSquare } from 'react-icons/bs';
import { AiOutlineEye } from "react-icons/ai";
import { toast } from 'react-toastify';
import {
  useAddclientsMutation, 
  useGetclientsQuery, 
  useUpdateclientMutation,
  useSearchClientQuery
} from '../services/clientApi'

const TABLE_HEAD = ["Name", "Actions",];


const Client = () => {
  const [formData, setFormData] = useState({
    name:"",
    phone:"",
    mobile:"",
    status:""
  });
  // const [search, setSearch] = useState({
  //   name:''
  // });
  const [searchTerm, setSearch] = useState('');
  const [open, setOpen] = useState(false);
    const [EditOpen, setEditOpen] = useState(false);
    const [client, setClient] = useState('');
    const [viewData, setViewData] = useState();
    const [clientId, setClientId] = useState();
    const [Viewopen, setViewOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleEditOpen = () => setEditOpen(!EditOpen);

  const {data, isLoading} = useGetclientsQuery();
  const [addclients] = useAddclientsMutation();
  const [updateclient] = useUpdateclientMutation();
  const {data:clients} = useSearchClientQuery(searchTerm);

  const handleViewOpen = () => setViewOpen(!Viewopen);
  const handleEdit = () => setEditOpen(!EditOpen);

  const {name, phone, mobile, status} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const SearchOnChange = e => setSearch(e.target.value)

  const EditOnChange = (e) => {
    setViewData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const viewDetails =(id)=>{
    let eProfile = data && data.find((item)=>{
      return item?._id === id
      });
      setViewData(eProfile);
      setClient(eProfile._id);
      handleViewOpen();
  }


  const EditDetails = (id) => {
    let eProfile =
      data &&
      data.find((item) => {
        return item?._id === id;
      });
    handleEdit();
    setViewData(eProfile);
    setClientId(eProfile?._id);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const OnSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = user.token;
      const formData = {
        name: name,
        phone: phone,
        mobile: mobile,
        status: status
      };
      await addclients({ token, formData }).unwrap();
      toast.success("Client Saved successfully");
      setFormData({
        name: "",
        phone: "",
        mobile: "",
        status: ""
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
        name: viewData?.name,
        phone: viewData?.phone,
        mobile: viewData?.mobile,
        status: viewData?.status,
        id: clientId
      };

      await updateclient({ token, formData }).unwrap();
      toast.success("Client Updated Successfully");
      setFormData({
        name: "",
        phone: "",
        mobile: "",
        status: ""
      });
      handleEdit();
    } catch (error) {
      toast.error(error.data.msg);
      //   alert(error.data)
    }
  };


  return (
    <div className='bg-[#EDF0F5] h-[100vh] px-5 py-5'>

      {/*Add Client model  */}
      <Dialog open={open} handler={handleOpen} className="" size="xl">
        <div className="">
          <DialogHeader className="text-[#489EE7]">
            Add Client Form
          </DialogHeader>
          {/* <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} /> */}
        </div>
        <DialogBody className="">
          <form onSubmit={OnSubmit}>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-3 mt-2">
              <div className="flex flex-col space-y-2">
                <label>Client Name</label>
                <input
                required
                  value={name}
                  name="name"
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
                <label>Mobile</label>
                <input
                required
                  value={mobile}
                  name="mobile"
                  type="number"
                  onChange={onChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Status</label>
                <select
                required
                  onChange={onChange}
                  className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                  name="status"
                  value={status}
                  id="status"
                >
                  <option value="active">active</option>
                  <option value="in active">in active</option>
                </select>
              </div>

            </div>

            <div className="flex justify-end mt-6">
              <Button
                variant="gradient"
                type="submit"
                color="green"
                size="lg"
                className=""
              >
                Save
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


      {/*Edit  Client model  */}
      <Dialog open={EditOpen} handler={handleEdit} className="" size="xl">
        <div className="">
          <DialogHeader className="text-[#489EE7]">
            Edit Client Form
          </DialogHeader>
          {/* <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} /> */}
        </div>
        <DialogBody className="">
          <form onSubmit={EditOnSubmit}>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-3 mt-2">
              <div className="flex flex-col space-y-2">
                <label>Client Name</label>
                <input
                  value={viewData?.name}
                  name="name"
                  type="text"
                  onChange={EditOnChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Phone</label>
                <input
                  value={viewData?.phone}
                  name="phone"
                  type="number"
                  onChange={EditOnChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Mobile</label>
                <input
                  value={viewData?.mobile}
                  name="mobile"
                  type="number"
                  onChange={EditOnChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Status</label>
                <select
                  onChange={EditOnChange}
                  className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                  name="status"
                  value={viewData?.status}
                  id="status"
                >
                  <option value="active">active</option>
                  <option value="in active">in active</option>
                </select>
              </div>

            </div>

            <div className="flex justify-end mt-6">
              <Button
                variant="gradient"
                type="submit"
                color="green"
                size="lg"
                className=""
              >
                Udate
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

      {/* client view Model */}
      <Dialog open={Viewopen} handler={handleViewOpen} size="xl">
        <DialogHeader>View Client</DialogHeader>
        <DialogBody divider className='p-10'>
          <div className="table-horizontal-container">
            <table className="unfixed-table w-full mb-10">
              <tbody>
                <tr>
                  <th>Client Name</th>
                  <td>{viewData?.name}</td>
                  <th className="">Phone</th>
                  <td className="">{viewData?.phone}</td>
                </tr>

                <tr>
                  <th>Mobile</th>
                  <td>{viewData?.mobile}</td>
                  <th>Created</th>
                  <td>2023</td>
                </tr>

              </tbody>
            </table>
          </div>
        </DialogBody>
      </Dialog>


       {/* Table */}
       <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className='mb-20 md:mb-10'>
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <Typography variant="h5" className="text-[#489EE7]">
             Client List
            </Typography>

        <Button className="flex items-center gap-3 bg-[#489EE7] rounded-sm justify-center" size="sm" onClick={handleOpen}>
                <BsPlusSquare className='h-7 w-7'/>
               Add Clinnet
            </Button>
            </div>
            <div>
              <form>
                <Input label="Search" color="gray" name='searchTerm' value={searchTerm} onChange={SearchOnChange} icon={<BsSearch className="h-5 w-5" />} />
              </form>
            
            </div>
        
        </div>

      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        {clients && clients.length === 0 ? (<p className='mx-5'>No data found</p>) : (
          <div>
                    {
                  clients || !isLoading ? (
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD.map((head) => (
                          <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
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
                      {clients?.map((item) => {
                        const isLast = item?._id === clients.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                        return (
                          <tr key={item?._id}>

                            <td className={classes}>
                              <div className="flex flex-col">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  {item?.name}
                                </Typography>
                              </div>
                            </td>

                            <td className={classes}>
                              <div className='flex space-x-2'>
                              <AiOutlineEye
                                      className="h-5 w-5 cursor-pointer hover:text-amber-300"
                                      onClick={() => viewDetails(item?._id)}
                                    />
                                  <BsPencilSquare onClick={()=> EditDetails(item?._id)} className='h-5 w-5 cursor-pointer hover:text-[#489EE7]'/>
                              </div>
                              
                            </td>

                          </tr>
                        );
                      })}

                    </tbody>
                  </table>
                  ): (<p>Loading...</p>)} 
                  </div>

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

export default Client