import { useEffect, useState, useRef } from 'react';
import DataTable from 'react-data-table-component'
import { useReactToPrint } from "react-to-print";
import { BsPrinter } from 'react-icons/bs';

import {
    useGetYesterdayreportQuery
    } from '../../../services/userReportApi'


    const columns = [
        {
            name: 'Id',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.firstName && row.lastName,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
      ];

const Yesterday = () => {
    const {data} = useGetYesterdayreportQuery();
  
    var today = new Date();
    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
  
    const componentRef = useRef();
      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
      

        // local date with //
    //   toLocaleDateString
  
  
    return (
      <div className='mx-7 my-5'>
        {data && data.length === 0 ? null : (
          <button className='bg-[#489EE7] flex text-[#fff] px-2 py-1 gap-2 mb-6  rounded-md' onClick={handlePrint}>
     <BsPrinter className='h-6 w-[6]'/> <p>Print PDF</p> 
     </button>
        )}
        
        <div className='p-10 bg-white' ref={componentRef}>
          <p className='text-[23px] font-semibold text-[#489EE7] mb-6'>Yester Report <span className='text-black'> {yesterday.toDateString('en-US')}</span></p>
          <DataTable
              columns={columns}
              data={data && data}
              dense 
              highlightOnHover
          />
          {data && data.length === 0 ? null : (
            <div className='mt-4'>
          <p className='text-[20px] font-semibold text-[#489EE7] mb-6'>Total Users <span className='text-black'> {data?.length}</span></p>
          </div>
          )}
          
        </div>
         
      </div>
    )
  }

export default Yesterday