import {useState} from 'react'
import { BiHomeAlt, BiDownArrow, BiListCheck, BiUserVoice, BiMenu, BiBarChartAlt } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi';
import { MdOutlineAccountTree } from 'react-icons/md';
import {BsCardList, BsClipboardData, BsListNested, BsListColumnsReverse, BsListCheck } from 'react-icons/bs';
import {Link} from 'react-router-dom'

import {
    Drawer,
    IconButton,
  } from "@material-tailwind/react";

const Sidebar = () => {
    const [dropdown, setDropdown] = useState(false);
    

    const showDashboard =()=>{
        setDropdown(!dropdown);
      }

     
   
    //   from material tailwind 
        const [openLeft, setOpenLeft] = useState(false);
        
        const openDrawerLeft = () => setOpenLeft(true);
        const closeDrawerLeft = () => setOpenLeft(false);

  return (
    <div className=''>
            {/* test with material design tailwindcss */}
            <IconButton className='bg-white cursor-pointer rounded-md ' onClick={openDrawerLeft}><BiMenu className='h-7 w-7 text-[#489EE7]'/></IconButton>
            <Drawer
        placement="left"
        open={openLeft}
        onClose={closeDrawerLeft}
        className="p-4"
      >
        <div className="mb-6 ">
            <div className='flex items-center justify-between'>
            <p className='text-[30px] font-bold text-[#489EE7]'>Mabruuk</p>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerLeft}
          >
            <AiOutlineClose className='h-7 w-7 text-[#489EE7]'/>
          </IconButton>
            </div>
          

          {/* My data with sidebar */}
            <div>
            {/* Menu Items */}
            <div className='mt-10 w-full flex flex-col space-y-4'>

                <Link to='/' onClick={closeDrawerLeft} className='hover:bg-[#489EE7] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
                    <BiHomeAlt className='w-6 h-6'/>
                    <p className='text-[16px] font-medium tracking-wide'>Dashboard</p>
                </Link>

                <div className='flex flex-row justify-between items-center hover:bg-[#489EE7] hover:text-white mx-4 px-2 py-2 rounded-sm cursor-pointer' onClick={showDashboard}>
                <div className='flex items-center justify-start  space-x-3'>
                    <SlCalender className='w-6 h-6'/>
                    <p className='text-[16px] font-medium tracking-wide'>Event</p>
                
                </div>   
                <BiDownArrow className='h-4 w-4 text-right flex-end' onClick={showDashboard}/>
                </div>
                {/* Dropdown */}
                <div className={`${dropdown ? "" : "hidden" }`}>
                <Link to='/event-list' onClick={closeDrawerLeft} className='hover:bg-[#489EE7] hover:text-white flex items-center justify-start mx-6 px-4 py-2 rounded-sm space-x-3 cursor-pointer'>
                    <BsListNested className='w-5 h-5'/>
                    <p className='text-[13px] font-medium tracking-wide'>Event List</p>
                </Link>


                <Link to='/event/booked' onClick={closeDrawerLeft} className='hover:bg-[#489EE7] hover:text-white flex items-center justify-start mx-6 px-4 py-2 rounded-sm space-x-3 cursor-pointer'>
                    <BsListColumnsReverse className='w-5 h-5'/>
                    <p className='text-[13px] font-medium tracking-wide'>Booked List</p>
                </Link>

                <Link to='/event/approved' onClick={closeDrawerLeft} className='hover:bg-[#489EE7] hover:text-white flex items-center justify-start mx-6 px-4 py-2 rounded-sm space-x-3 cursor-pointer'>
                    <BsListCheck className='w-5 h-5'/>
                    <p className='text-[13px] font-medium tracking-wide'>Apporved List</p>
                </Link>

                <Link to='/event/canceled' onClick={closeDrawerLeft} className='hover:bg-[#489EE7] hover:text-white flex items-center justify-start mx-6 px-4 py-2 rounded-sm space-x-3 cursor-pointer'>
                    <BsCardList className='w-5 h-5'/>
                    <p className='text-[13px] font-medium tracking-wide'>Canceled List</p>
                </Link>
                
                </div>

                <Link to='/clients' onClick={closeDrawerLeft} className='hover:bg-[#489EE7] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
                    <BiUserVoice className='w-6 h-6'/>
                    <p className='text-[16px] font-medium tracking-wide'>Clients</p>
                </Link>

                <Link to='/category' onClick={closeDrawerLeft} className='hover:bg-[#489EE7] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
                    <BsClipboardData className='w-6 h-6'/>
                    <p className='text-[16px] font-medium tracking-wide'>Category</p>
                </Link>

                <Link to='/service' onClick={closeDrawerLeft} className='hover:bg-[#489EE7] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
                    <BiListCheck className='w-6 h-6'/>
                    <p className='text-[16px] font-medium tracking-wide'>Services</p>
                </Link>

                <Link to='/accountants' onClick={closeDrawerLeft} className='hover:bg-[#489EE7] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
                    <MdOutlineAccountTree className='w-6 h-6'/>
                    <p className='text-[16px] font-medium tracking-wide'>Accountants</p>
                </Link>
                <Link to='/reports' onClick={closeDrawerLeft} className='hover:bg-[#489EE7] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
                    <BiBarChartAlt className='w-6 h-6'/>
                    <p className='text-[16px] font-medium tracking-wide'>Reports</p>
                </Link>
                <Link to='/users' onClick={closeDrawerLeft} className='hover:bg-[#489EE7] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
                    <HiOutlineUsers className='w-6 h-6'/>
                    <p className='text-[16px] font-medium tracking-wide'>Users</p>
                </Link>
                
                


            </div>
            </div>
          
        </div>
      </Drawer>
    </div>
  
  )
}

export default Sidebar