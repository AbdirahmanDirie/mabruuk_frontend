import { useEffect, useState, useRef } from 'react';
import DataTable from 'react-data-table-component'
import { useReactToPrint } from "react-to-print";
import { BsPrinter } from 'react-icons/bs';

const columns = [
  {
      name: 'Id',
      selector: row => row.id,
      sortable: true,
  },
  {
      name: 'avatar_url',
      selector: row => row.avatar_url,
      sortable: true,
  },
  {
      name: 'avatar_url',
      selector: row => row.avatar_url,
      sortable: true,
  },
];

// const data = [
//   {
//       id: 1,
//       title: 'Beetlejuice',
//       year: '1988',
//   },
//   {
//       id: 2,
//       title: 'Ghostbusters',
//       year: '1984',
//   },
// ]

const Today = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  var date= new Date();


  const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });


  console.log(data);


  return (
    <div className='mx-7 my-5'>
      <button className='bg-[#489EE7] flex text-[#fff] px-2 py-1 gap-2 mb-6  rounded-md' onClick={handlePrint}>
   <BsPrinter className='h-6 w-[6]'/> <p>Print PDF</p> 
   </button>
      <div className='p-10 bg-white' ref={componentRef}>
        <p className='text-[23px] font-semibold text-[#489EE7] mb-6'>Today Report <span className='text-black'> {date.toDateString()}</span></p>
        <DataTable
            columns={columns}
            data={data && data}
            dense
            highlightOnHover
        />
      </div>
       
    </div>
  )
}

export default Today