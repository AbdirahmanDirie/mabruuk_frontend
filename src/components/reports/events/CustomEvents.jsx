import { useEffect, useState, useRef } from 'react';
import DataTable from 'react-data-table-component'
import { useReactToPrint } from "react-to-print";
import { BsPrinter } from 'react-icons/bs';
import { Input } from "@material-tailwind/react";

import {
  useGetCustomreportQuery
} from '../../../services/eventReportApi'

const columns = [
  {
      name: 'Id',
      selector: row => row._id,
      sortable: true,
  },
  {
      name: 'Client Name',
      selector: row => row.clientId.name,
      sortable: true,
  },
  {
      name: 'Phone',
      selector: row => row.clientId.phone,
      sortable: true,
  },
  {
      name: 'Service',
      selector: row => row.serviceId.name,
      sortable: true,
  },
  {
      name: 'Category',
      selector: row => row.categoryId.name,
      sortable: true,
  },
  {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
  },
];


const CustomUsers = () => {
  const [cusomDate, setCustomDate] = useState({
    start:'',
    end:''
  });

    const {start, end} = cusomDate;

  // const {data} = useGetLast30dayskreportQuery();
  const {data} = useGetCustomreportQuery({start, end});
 

 



  const onChange = (e) => {
    setCustomDate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });




  return (
    <div className='mx-7 my-5'>
     
        <div className='mb-2 mt-1'>
        
          <form className='grid grid-cols-1 md:grid-cols-2 gap-3'> 

          <div className='flex gap-2'>
            <Input color="blue" label="Start Date" type='date' onChange={onChange} name='start' value={start}/>
         <Input color="blue" label="End Date" type='date' onChange={onChange} name='end' value={end}/>
          </div>

         <div className='flex gap-2'>
          {data && data.length === 0 ? null : (
          <div className='bg-[#489EE7] flex text-[#fff] cursor-pointer px-2 py-2 gap-2  rounded-md' onClick={handlePrint}>
          <BsPrinter className='h-6 w-[6]'/> <p>Print PDF</p> 
          </div> )}
         </div>
      
          </form> 
         </div>
      
      <div className='p-10 bg-white' ref={componentRef}>
        <p className='text-[23px] font-semibold text-[#489EE7] mb-6'>Custom Reports <span className='text-black'> 
        {start && start} - {end && end}
        </span></p>
        <DataTable
            columns={columns}
            data={data && data}
            dense
            highlightOnHover
        />
        {data && data.length === 0 ? null : (
          <div className='mt-4'>
        <p className='text-[20px] font-semibold text-[#489EE7] mb-6'>Total Events <span className='text-black'> {data?.length}</span></p>
        </div>
        )}
        
      </div>
       
    </div>
  )
}

export default CustomUsers;