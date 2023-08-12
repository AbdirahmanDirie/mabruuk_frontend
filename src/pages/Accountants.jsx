import {useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
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
import { BsPlusSquare, BsSearch, BsPencilSquare, BsTrash } from 'react-icons/bs';
import {
  useGetTransactionsQuery, 
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
  useUpdateTransactionMutation
} from '../services/transactionApi'
import moment from 'moment';
import { toast } from "react-toastify";


const user = JSON.parse(localStorage.getItem("user"));


const Accountants = () => {

  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Type',
        selector: row => row.type,
        sortable: true,
    },
    {
        name: 'Category',
        selector: row => row.category,
        sortable: true,
    },
    {
        name: 'Amount',
        selector: row => row.amount,
        sortable: true,
    },
    {
        name: 'Date',
        selector: row => row.date,
        format: (row) => moment(row.date).format('DD/MM/yyyy'),
        sortable: true,
    },
    {
        name: 'Description',
        selector: row => row.description,
        sortable: true,
    },
    {
      name:"Actions",
      cell:row =>(
        <div>
        {
          user.type === 'admin' ? (
          <div className='flex flex-row items-center gap-x-4'>
        <div  onClick={() => handleEdit(row)}> <BsPencilSquare className='h-5 w-5 text-amber-800 cursor-pointer'/> </div>
        <div onClick={() => handleDelete(row)}><BsTrash className='h-5 w-5 text-red-800 cursor-pointer'/></div>
        </div>
          ): (<p className="text-amber-900">Only admin can access</p>)
        }
        </div>
        
      )
    }
  ];



  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState();
  const [formData, setFormData] = useState({
    title:'',
    type:'',
    amount:0,
    category:'',
    description:'',
    date:''
  });


  const {title, type, amount, category, description, date} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const EditOnChange = (e) => {
    setEditData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const {data:transaction, isLoading} = useGetTransactionsQuery();

  const [createTransaction] = useCreateTransactionMutation();
  const [deleteTransaction] = useDeleteTransactionMutation();
  const [updateTransaction] = useUpdateTransactionMutation();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleOpen = () => setOpen(!open);
  const handleEditOpen = () => setOpenEdit(!openEdit);

  // datatabele actions
  const handleRowClick = (row) => {
    // Handle row click event
    console.log("Row clicked: ", row);
  };

  const handleEdit = (row) => {
    handleEditOpen()
    setEditData(row)

  };

  const handleDelete = async (row) => {
    try {
      const result = confirm("Are you sure you want to delete?");
      const id = row._id;
      const token = user.token;
      if (result) {
        await deleteTransaction({id, token}).unwrap();
        toast.success("Transaction deleted successfully")
      }
    } catch (error) {
      toast.error(error.data.msg);
    }
    
  };



  

  const OnSubmit = async (e) => {
    e.preventDefault();
    
    try {
    const token = user.token;

    if(!type){
      toast.error("Type is field required");
    }else{
      const formData= {
        title:title,
        type:type,
        amount:amount,
        category:category,
        description:description,
        date:date
        }
        await createTransaction({token, formData}).unwrap();
        toast.success("Transaction created successfully");
        handleOpen();
        setFormData({
        title:'',
        type:"",
        amount:0,
        category:'',
        description:'',
        date:''
        })
    }

  } catch (error) {
    toast.error(error.data.msg);
  }

  }


  const EditOnSubmit = async (e) => {
    e.preventDefault();
    
    try {
    const token = user.token;

    // if(!type){
    //   toast.error("Type is field required");
    // }else{
      const formData= {
        title:editData?.title,
        type:editData?.type,
        amount:editData?.amount,
        category:editData?.category,
        description:editData?.description,
        date:editData?.date,
        id:editData?._id
        }

        await updateTransaction({token, formData}).unwrap();
        toast.success("Transaction Updated successfully");
        handleEditOpen();
    // }

  } catch (error) {
    toast.error(error.data.msg);
  }

  }



  return (
     <div className='mx-7 my-5'>

      {/*transaction Add model  */}
      <Dialog open={open} handler={handleOpen} className='' size="lg">
        <div className="">
          <DialogHeader className='text-[#489EE7]'>Tracsaction Form</DialogHeader>
        </div>
        <DialogBody className=''>
        <form className='grid grid-cols-1 gap-x-6 gap-y-3 mt-2' onSubmit={OnSubmit}>

        <div className='grid md:grid-cols-2 gap-x-6 gap-y-3 mt-2 '>

        <div className="flex flex-col space-y-2">
                <label>Title</label>
                <input
                required
                  name="title"
                  value={title}
                  onChange={onChange}
                  type="text"
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>

        <div className="flex flex-col space-y-2">
                <label>Type</label>
                <select
                  className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                  name="type"
                  required
                  id="type"
                  value={type}
                  onChange={onChange}
                >
                  <option value="">Select Type</option>
                  <option value="income">income</option>
                  <option value="expense">expense</option>
                </select>
              </div>


              <div className="flex flex-col space-y-2">
                <label>Catgeory</label>
                <input
                required
                  name="category"
                  type="text"
                  value={category}
                  onChange={onChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>


              <div className="flex flex-col space-y-2">
                <label>Amount</label>
                <input
                required
                  name="amount"
                  value={amount}
                  onChange={onChange}
                  type="number"
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label>Date</label>
                <input
                required
                  name="date"
                  value={date}
                  onChange={onChange}
                  type="date"
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label>Description</label>
                <textarea
                name='description'
                value={description}
                  onChange={onChange}
                  required
                className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"></textarea>
              </div>

            </div>

            <div className='flex justify-end'>
              <Button variant="gradient" type='submit' color="blue" size='lg'>
            Save Transaction
          </Button>
            </div>

            
          </form>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined"  color="red" onClick={handleOpen}>
            close
          </Button>
        </DialogFooter>
      </Dialog>


      {/*transaction Edit model  */}
      <Dialog open={openEdit} handler={handleEditOpen} className='' size="lg">
        <div className="">
          <DialogHeader className='text-[#489EE7]'>Tracsaction Form</DialogHeader>
        </div>
        <DialogBody className=''>
        <form className='grid grid-cols-1 gap-x-6 gap-y-3 mt-2' onSubmit={EditOnSubmit}>

        <div className='grid md:grid-cols-2 gap-x-6 gap-y-3 mt-2 '>

        <div className="flex flex-col space-y-2">
                <label>Title</label>
                <input
                required
                  name="title"
                  value={editData?.title}
                  onChange={EditOnChange}
                  type="text"
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>

        <div className="flex flex-col space-y-2">
                <label>Type</label>
                <select
                  className="h-[40px] bg-white border-2 border-gray-300 outline-none px-4 rounded-[5px]"
                  name="type"
                  required
                  id="type"
                  value={editData?.type}
                  onChange={EditOnChange}
                >
                  <option value="">Select Type</option>
                  <option value="income">income</option>
                  <option value="expense">expense</option>
                </select>
              </div>


              <div className="flex flex-col space-y-2">
                <label>Catgeory</label>
                <input
                required
                  name="category"
                  type="text"
                  value={editData?.category}
                  onChange={EditOnChange}
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>


              <div className="flex flex-col space-y-2">
                <label>Amount</label>
                <input
                required
                  name="amount"
                  value={editData?.amount}
                  onChange={EditOnChange}
                  type="number"
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label>Date</label>
                <input
                required
                  name="date"
                  value={moment(new Date(editData?.date)).format("YYYY-MM-DD")}
                  onChange={EditOnChange}
                  type="date"
                  className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label>Description</label>
                <textarea
                name='description'
                value={editData?.description}
                  onChange={EditOnChange}
                  required
                className="bg-white border-2 border-gray-300  outline-none rounded-[5px] h-[40px] px-2"></textarea>
              </div>

            </div>

            <div className='flex justify-end'>
              <Button variant="gradient" type='submit' color="blue" size='lg'>
            Update Transaction
          </Button>
            </div>

            
          </form>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined"  color="red" onClick={handleEditOpen}>
            close
          </Button>
        </DialogFooter>
      </Dialog>




      <div className='p-10 bg-white rounded-md'>
   <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <Typography variant="h5" className="text-[#489EE7]">
             Transaction List
            </Typography>
            {user.type === 'admin' ? (
              <Button className="flex items-center gap-3 bg-[#489EE7] rounded-sm justify-center" size="sm" onClick={handleOpen}>
                <BsPlusSquare className='h-7 w-7'/>
               Add Transaction
            </Button>
            ) : ( '')}

        
            </div>

        <DataTable
            columns={columns}
            data={transaction && transaction}
            onRowClicked={(row) => handleRowClick(row)}
            dense
            highlightOnHover
            pagination
            fixedHeader
            responsive
        />
      </div>
       
    </div>
  )
}

export default Accountants