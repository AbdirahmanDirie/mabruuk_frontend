const MobSidebarClick =()=>{
    setSideBar(true);
    setMobSideBar(false);
  }

  const [sidebar, setSideBar] = useState(true);
    const [mobSidebar, setMobSideBar] = useState(false);



<div className={`bg-[#fff] w-[250px] mx-w-[250px] h-[100vh] flex flex-col items-center ${sidebar ? "" : "hidden" }`}>

{/* Logo & arrow sidebar*/}
<div className='flex items-center justify-between px-6 mt-6 w-full'>
    <p className='text-[30px] font-bold text-[#4944FF]'>Mabruuk</p>
    <BiLeftArrowAlt className='text-right w-5 h-5 cursor-pointer hover:bg-[#F0497A] hover:rounded-full hover:text-white' onClick={sidebarClick}/>
</div>

{/* Menu Items */}
<div className='mt-10 w-full flex flex-col space-y-4'>

    <Link to='/' className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
        <BiHomeAlt className='w-6 h-6'/>
        <p className='text-[16px] font-medium tracking-wide'>Dashboard</p>
    </Link>

    <div className='flex flex-row justify-between items-center hover:bg-[#F0497A] hover:text-white mx-4 px-2 py-2 rounded-sm cursor-pointer' onClick={showDashboard}>
     <div className='flex items-center justify-start  space-x-3'>
        <SlCalender className='w-6 h-6'/>
        <p className='text-[16px] font-medium tracking-wide'>Event</p>
       
    </div>   
    <BiDownArrow className='h-4 w-4 text-right flex-end' onClick={showDashboard}/>
    </div>
    {/* Dropdown */}
    <div className={`${dropdown ? "" : "hidden" }`}>
    <Link to='/event-list' className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-6 px-4 py-2 rounded-sm space-x-3 cursor-pointer'>
        <BsCardList className='w-5 h-5'/>
        <p className='text-[13px] font-medium tracking-wide'>Event List</p>
    </Link>


    <div className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-6 px-4 py-2 rounded-sm space-x-3 cursor-pointer'>
        <BsPlusSquare className='w-5 h-5'/>
        <p className='text-[13px] font-medium tracking-wide'>Pending List</p>
    </div>

    <div className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-6 px-4 py-2 rounded-sm space-x-3 cursor-pointer'>
        <BsPlusSquare className='w-5 h-5'/>
        <p className='text-[13px] font-medium tracking-wide'>Accepted List</p>
    </div>

    <div className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-6 px-4 py-2 rounded-sm space-x-3 cursor-pointer'>
        <BsPlusSquare className='w-5 h-5'/>
        <p className='text-[13px] font-medium tracking-wide'>Canceled List</p>
    </div>
    
    </div>

    <Link to='/clients' className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
        <BiUserVoice className='w-6 h-6'/>
        <p className='text-[16px] font-medium tracking-wide'>Clients</p>
    </Link>

    <Link to='/category' className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
        <BsClipboardData className='w-6 h-6'/>
        <p className='text-[16px] font-medium tracking-wide'>Category</p>
    </Link>

    <Link to='/service' className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
        <BiListCheck className='w-6 h-6'/>
        <p className='text-[16px] font-medium tracking-wide'>Services</p>
    </Link>

    <div className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
        <HiOutlineDocumentReport className='w-6 h-6'/>
        <p className='text-[16px] font-medium tracking-wide'>Reports</p>
    </div>
    <Link to='/users' className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer'>
        <HiOutlineUsers className='w-6 h-6'/>
        <p className='text-[16px] font-medium tracking-wide'>Users</p>
    </Link>
    
    


</div>
      </div>

        {/* Mobile View Responsive*/}

        <div className={`bg-white w-[70px] mx-w-[250px] flex flex-col items-center ${mobSidebar ? "" : "hidden" }`}>

{/* Logo & arrow sidebar */}
<div className='flex items-center justify-between px-6 mt-6 w-full'>
    <BiRightArrowAlt className='text-right w-5 h-5 cursor-pointer hover:bg-[#F0497A] hover:rounded-full hover:text-white' onClick={MobSidebarClick}/>
</div>

{/* Menu Items */}
<div className='mt-10 w-full flex flex-col space-y-4 relative'>

    <div className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer group relative'>
        <BiHomeAlt className='w-6 h-6'/>
        <p className='absolute top-2 left-12 px-1.5 py-0.5 rounded-sm text-[14px] bg-[#F0497A] text-white z-10 hidden group-hover:flex '>Dashboard</p>
    </div>
   
    

    <div className='flex flex-row justify-between items-center hover:bg-[#F0497A] hover:text-white mx-4 px-2 py-2 rounded-sm cursor-pointer group relative' onClick={showDashboard} >
     <div className='flex items-center justify-start  space-x-3'>
        <SlCalender className='w-6 h-6'/>

        <p className='absolute top-2 left-12 px-1.5 py-0.5 rounded-sm text-[14px] bg-[#F0497A] text-white z-10 hidden group-hover:flex '>Eevnt </p>
       
    </div>   
    <BiDownArrow className='h-4 w-4 text-right flex-end' onClick={showDashboard}/>
    </div>
    {/* Dropdown */}
    <div className={`${dropdown ? "" : "hidden" }`}>
    <div className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer group relative'>
        <BsPlusSquare className='w-5 h-5'/>
        <p className='absolute top-2 left-12 px-1.5 py-0.5 rounded-sm text-[14px] bg-[#F0497A] text-white z-10 hidden group-hover:flex '>Booking</p>
    </div>
    <div className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer group relative'>
        <BsCardList className='w-5 h-5'/>
        <p className='absolute top-2 left-12 px-1.5 py-0.5 rounded-sm text-[14px] bg-[#F0497A] text-white z-10 hidden group-hover:flex '>List </p>
    </div>
    </div>

    <div className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer group relative'>
        <BsClipboardData className='w-6 h-6'/>
        <p className='absolute top-2 left-12 px-1.5 py-0.5 rounded-sm text-[14px] bg-[#F0497A] text-white z-10 hidden group-hover:flex '>Category</p>
    </div>

    <div className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer group relative'>
        <BiListCheck className='w-6 h-6'/>
        <p className='absolute top-2 left-12 px-1.5 py-0.5 rounded-sm text-[14px] bg-[#F0497A] text-white z-10 hidden group-hover:flex '>Services</p>
    </div>

    <div className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer group relative'>
        <HiOutlineDocumentReport className='w-6 h-6'/>
        <p className='absolute top-2 left-12 px-1.5 py-0.5 rounded-sm text-[14px] bg-[#F0497A] text-white z-10 hidden group-hover:flex '>Report</p>
    </div>
    <div className='hover:bg-[#F0497A] hover:text-white flex items-center justify-start mx-4 px-2 py-2 rounded-sm space-x-3 cursor-pointer group relative'>
        <HiOutlineUsers className='w-6 h-6'/>
        <p className='absolute top-2 left-12 px-1.5 py-0.5 rounded-sm text-[14px] bg-[#F0497A] text-white z-10 hidden group-hover:flex '>Users</p>
    </div>
    
    


</div>
        </div>