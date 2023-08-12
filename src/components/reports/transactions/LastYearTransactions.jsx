import { useEffect, useState, useRef } from 'react';
import DataTable from 'react-data-table-component'
import { useReactToPrint } from "react-to-print";
import { BsPrinter } from 'react-icons/bs';

import {
useGetLastyearreportQuery
} from '../../../services/transactionReportApi'

const columns = [
  {
      name: 'Id',
      selector: row => row._id,
      sortable: true,
  },
  {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
  },
  {
      name: 'Category',
      selector: row => row.category,
      sortable: true,
  },
  {
      name: 'Type',
      selector: row => row.type,
      sortable: true,
  },
  {
      name: 'Amount',
      selector: row => row.amount,
      sortable: true,
  },
];


const LastYearTransactions = () => {
  const {data} = useGetLastyearreportQuery();
  let incomeSum = 0;
  let expenseSum = 0;

  data?.forEach((transaction) => {
    if (transaction.type === 'income') {
      incomeSum += transaction.amount;
    } else if (transaction.type === 'expense') {
      expenseSum += transaction.amount;
    }
  });

  const totalSum = incomeSum - expenseSum;
  

  const totalAmount = data?.reduce((acc, curr) => acc + curr.amount, 0)

  
  const currentDate = new Date();
const pastYear = new Date();

// Set the year of the pastYear date object to the previous year
pastYear.setFullYear(currentDate.getFullYear() - 1);


  const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });





  return (
    <div className='mx-7 my-5'>
      {data && data.length === 0 ? null : (
        <button className='bg-[#489EE7] flex text-[#fff] px-2 py-1 gap-2 mb-6  rounded-md' onClick={handlePrint}>
   <BsPrinter className='h-6 w-[6]'/> <p>Print PDF</p> 
   </button>
      )}
      
      <div className='p-10 bg-white' ref={componentRef}>
        <p className='text-[23px] font-semibold text-[#489EE7] mb-6'>LastYear Report <span className='text-black'> {pastYear.getFullYear()}</span></p>
        <DataTable
            columns={columns}
            data={data && data}
            dense
            highlightOnHover
        />
        {data && data.length === 0 ? null : (
         <div className='mt-4 flex gap-4'>
         <p className='text-[20px] font-semibold text-[#489EE7] mb-6'>Revenu: <span className='text-black'> ${incomeSum}</span></p>
         <p className='text-[20px] font-semibold text-[#489EE7] mb-6'>Expense: <span className='text-black'> ${expenseSum}</span></p>
         <p className="text-gray-600">{totalSum > 0? (
         <p className='text-[20px] font-semibold text-[#489EE7] mb-6'>Net Income: <span className='text-black'>{totalSum}</span></p>
       ) : (
         <p className='text-[20px] font-semibold text-[#489EE7] mb-6'>Net Loss: <span className='text-black'>{totalSum}</span> </p>
       )}</p>
         </div>
        )}
        
      </div>
       
    </div>
  )
}

export default LastYearTransactions