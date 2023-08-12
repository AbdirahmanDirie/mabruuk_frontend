import { useEffect, useState, useRef } from 'react';
import DataTable from 'react-data-table-component'
import { useReactToPrint } from "react-to-print";
import { BsPrinter } from 'react-icons/bs';

import {
useGetLastMonthkreportQuery
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


const LastMonthEvents = () => {
  const {data} = useGetLastMonthkreportQuery();
  

  const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Array of month names

let date = new Date(); // Get current date
date.setMonth(date.getMonth() - 1); // Set the date to the past month

let pastMonthName = months[date.getMonth()]; // Get the name of the past month



  return (
    <div className='mx-7 my-5'>
      {data && data.length === 0 ? null : (
        <button className='bg-[#489EE7] flex text-[#fff] px-2 py-1 gap-2 mb-6  rounded-md' onClick={handlePrint}>
   <BsPrinter className='h-6 w-[6]'/> <p>Print PDF</p> 
   </button>
      )}
      
      <div className='p-10 bg-white' ref={componentRef}>
        <p className='text-[23px] font-semibold text-[#489EE7] mb-6'>Last Month Report <span className='text-black'> {pastMonthName}</span></p>
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

export default LastMonthEvents