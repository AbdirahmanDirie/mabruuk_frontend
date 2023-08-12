import React,{useEffect, useState} from 'react'
import {useAddServicesMutation, useGetServicesQuery, useUpdateServicesMutation} from '../services/servicesApi'
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
  import { toast } from 'react-toastify';

  const TABLE_HEAD = ["Name", "Actions",];


const Service = () => {
    const [open, setOpen] = useState(false);
    const [EditOpen, setEditOpen] = useState(false);


    const {data, isLoading} = useGetServicesQuery();
    const [addServices, {isError, error }] = useAddServicesMutation();

    const [category, setCategory] = useState('');
    const [viewData, setViewData] = useState();
    const [catId, setCatdId] = useState();
    // const [name, setName] = useState(viewData);

    const [updateServices] = useUpdateServicesMutation();

    const onCategoryChange = e => setCategory(e.target.value)
    const EditOnCategoryChange = e => setViewData(e.target.value)


  const handleOpen = () => setOpen(!open);
  const handleEditOpen = () => setEditOpen(!EditOpen);

    

  useEffect(() => {
    
  },[data, viewData, setViewData]);

  const user = JSON.parse(localStorage.getItem('user'));

  

  const OnSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = user.token;
        const name = category;
      await addServices({token, name}).unwrap()
      setCategory('');
      handleOpen()
      toast.success('Service added successfully')
      
      
    } catch (error) {
        toast.error(error.data.msg)
    //   alert(error.data)
      
    }
  }



  const viewDetails =(id)=>{
    handleEditOpen();
    let eProfile = data && data.find((item)=>{
      return item?._id === id
      });
      setViewData(eProfile.name);
      setCatdId(eProfile._id)
  }


  const EditOnSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = user.token;
        const name = viewData;
        const id = catId;
      await updateServices({token, id, name}).unwrap();
      setViewData('');
      setCatdId('');
      handleEditOpen()
      toast.success('Service Update successfully');
      
      
    } catch (error) {
        toast.error(error.data.msg)
    //   alert(error.data)
      
    }
  }

  return (
    <div className='bg-[#EDF0F5] h-[100vh] px-5 py-5'>

        {/*Category Add model  */}
        <Dialog open={open} handler={handleOpen} className='' size="md">
        <div className="">
          <DialogHeader className='text-[#489EE7]'>Add Service Form</DialogHeader>
          {/* <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} /> */}
        </div>
        <DialogBody className=''>
        <form className='grid grid-cols-1 gap-x-6 gap-y-3 mt-2' onSubmit={OnSubmit}>

<div className='flex flex-col space-y-2'>
    <label>Service Name</label>
    <input type='text' placeholder='Category Name' 
    name="category" 
    value={category} 
    onChange={onCategoryChange}
    className='bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2'/> 
</div>

            <Button variant="gradient" type='submit' color="green" size='lg'>
            Save Service
          </Button>
</form>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined"  color="red" onClick={handleOpen}>
            close
          </Button>
        </DialogFooter>
      </Dialog>


        {/*Category Edit model  */}
        <Dialog open={EditOpen} handler={handleEditOpen} className='' size="md">
        <div className="">
          <DialogHeader className='text-[#489EE7]'>Edit Service Form</DialogHeader>
          {/* <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} /> */}
        </div>
        <DialogBody className=''>
        <form className='grid grid-cols-1 gap-x-6 gap-y-3 mt-2' onSubmit={EditOnSubmit}>

<div className='flex flex-col space-y-2'>
    <label>Service Name</label>
    <input type='text' placeholder='Category Name' 
    name="category" 
    value={viewData} 
    onChange={EditOnCategoryChange}
    className='bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2'/> 
</div>

            <Button variant="gradient" type='submit' color="green" size='lg'>
            Update Services
          </Button>
</form>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined"  color="red" onClick={handleEditOpen}>
            close
          </Button>
        </DialogFooter>
      </Dialog>


        {/* Table */}
        <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className='mb-20 md:mb-10'>
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <Typography variant="h5" className="text-[#489EE7]">
             Service List
            </Typography>

        <Button className="flex items-center gap-3 bg-[#489EE7] rounded-sm justify-center" size="sm" onClick={handleOpen}>
                <BsPlusSquare className='h-7 w-7'/>
               Add Service
            </Button>
            </div>
     
        </div>

      </CardHeader>
      <CardBody className="overflow-scroll px-0">
      {
        data || !isLoading ? (
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
            {data.map((item) => {
              const isLast = item?._id === data.length - 1;
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
                         <BsPencilSquare onClick={()=> viewDetails(item?._id)} className='h-5 w-5 cursor-pointer hover:text-[#489EE7]'/>
                    </div>
                    
                  </td>

                </tr>
              );
            })}

          </tbody>
        </table>
        ): (<p>Loading...</p>)}
        
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

export default Service