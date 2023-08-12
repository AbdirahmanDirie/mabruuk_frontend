import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    List, 
    ListItem, 
    ListItemPrefix, 
    ListItemSuffix, 
    Chip, 
    Card
  } from "@material-tailwind/react";
  import { HiOutlineUsers } from 'react-icons/hi';
  import { BsCardList } from 'react-icons/bs';
  import { BiUserVoice, BiMoney } from 'react-icons/bi';

import { Link } from 'react-router-dom';

const Reports = () => {

    const data = [
        {
          label: "Users",
          value: "users",
          icon: HiOutlineUsers,
          desc: 
          <Card className="w-40 md:w-96 overflow-hidden rounded-md">
            <p className='text-[20px] font-semibold tracking-wider m-2 text-[#489EE7]'>Users report</p>
          <List className="p-0 my-2">
            {/* Today */}
            <Link to="/reports/users/today">
            <ListItem
              className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
            >
                Today
            </ListItem>
            </Link>

            <Link to="/reports/users/yesterday">
            <ListItem
              className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
            >
              
              Yesterday
            </ListItem>
            </Link>

            <Link to='/reports/users/lastweek'>
            <ListItem
              className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
            >
              
              Last week
            </ListItem>
            </Link>

            <Link to='/reports/users/thismonth'>
            <ListItem
              className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
            >
              
              This Month
            </ListItem></Link>

            <Link to='/reports/users/lastmonth'>
            <ListItem
              className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
            >
              
              Last Month
            </ListItem></Link>

            <Link to='/reports/users/last30days'>
            <ListItem
              className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
            >
              
              Last 30 Days
            </ListItem></Link>

            <Link to='/reports/users/thisyear'>
            <ListItem
              className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
            >
              
              This Year
            </ListItem></Link>

            <Link to='/reports/users/lastyear'>
            <ListItem
              className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
            >
              
              Last Year
            </ListItem></Link>

            <Link to='/reports/users/custom'>
            <ListItem
              className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
            >
              
              Custom Report
            </ListItem></Link>

          </List>
        </Card>,
        },
        {
          label: "Events",
          value: "events",
          icon: BsCardList,
          desc: <Card className="w-40 md:w-96 overflow-hidden rounded-md">
          <p className='text-[20px] font-semibold tracking-wider m-2 text-[#489EE7]'>Events report</p>
        <List className="p-0 my-2">
          {/* Today */}
          <Link to="/reports/events/today">
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
              Today
          </ListItem>
          </Link>

          <Link to="/reports/events/yesterday">
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Yesterday
          </ListItem>
          </Link>

          <Link to='/reports/events/lastweek'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Last week
          </ListItem>
          </Link>

          <Link to='/reports/events/thismonth'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            This Month
          </ListItem></Link>

          <Link to='/reports/events/lastmonth'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Last Month
          </ListItem></Link>

          <Link to='/reports/events/last30days'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Last 30 Days
          </ListItem></Link>

          <Link to='/reports/events/thisyear'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            This Year
          </ListItem></Link>

          <Link to='/reports/events/lastyear'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Last Year
          </ListItem></Link>

          <Link to='/reports/events/custom'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Custom Report
          </ListItem></Link>

        </List>
      </Card>,
        },
        {
          label: "Clients",
          value: "clients",
          icon: BiUserVoice,
          desc: <Card className="w-40 md:w-96 overflow-hidden rounded-md">
          <p className='text-[20px] font-semibold tracking-wider m-2 text-[#489EE7]'>Clients report</p>
        <List className="p-0 my-2">
          {/* Today */}
          <Link to="/reports/clients/today">
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
              Today
          </ListItem>
          </Link>

          <Link to="/reports/clients/yesterday">
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Yesterday
          </ListItem>
          </Link>

          <Link to='/reports/clients/lastweek'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Last week
          </ListItem>
          </Link>

          <Link to='/reports/clients/thismonth'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            This Month
          </ListItem></Link>

          <Link to='/reports/clients/lastmonth'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Last Month
          </ListItem></Link>

          <Link to='/reports/clients/last30days'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Last 30 Days
          </ListItem></Link>

          <Link to='/reports/clients/thisyear'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            This Year
          </ListItem></Link>

          <Link to='/reports/clients/lastyear'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Last Year
          </ListItem></Link>

          <Link to='/reports/clients/custom'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Custom Report
          </ListItem></Link>

        </List>
      </Card>,
        },
        {
          label: "Transactions",
          value: "transactions",
          icon: BiMoney,
          desc: <Card className="w-40 md:w-96 overflow-hidden rounded-md">
          <p className='text-[20px] font-semibold tracking-wider m-2 text-[#489EE7]'>Transactions report</p>
        <List className="p-0 my-2">
          {/* Today */}
          <Link to="/reports/transactions/today">
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
              Today
          </ListItem>
          </Link>

          <Link to="/reports/transactions/yesterday">
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Yesterday
          </ListItem>
          </Link>

          <Link to='/reports/transactions/lastweek'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Last week
          </ListItem>
          </Link>

          <Link to='/reports/transactions/thismonth'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            This Month
          </ListItem></Link>

          <Link to='/reports/transactions/lastmonth'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Last Month
          </ListItem></Link>

          <Link to='/reports/transactions/last30days'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Last 30 Days
          </ListItem></Link>

          <Link to='/reports/transactions/thisyear'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            This Year
          </ListItem></Link>

          <Link to='/reports/transactions/lastyear'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Last Year
          </ListItem></Link>

          <Link to='/reports/transactions/custom'>
          <ListItem
            className="rounded-none text-sm py-1.5 px-3 font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
          >
            
            Custom Report
          </ListItem></Link>

        </List>
      </Card>,
        },
      ];


  return (
    <div className='mx-7 my-5'>
    <Tabs value="dashboard" orientation="vertical">
    <TabsHeader className="w-40 md:w-96 p-6 bg-[#489EE7]">
      {data.map(({ label, value, icon }) => (
        <Tab key={value} value={value} className="place-items-start">
          <div className="flex items-center gap-2">
            {React.createElement(icon, { className: "w-5 h-5" })}
            {label}
          </div>
        </Tab>
      ))}
    </TabsHeader>
    <TabsBody>
      {data.map(({ value, desc }) => (
        <TabPanel key={value} value={value} className="py-0">
          {desc}
        </TabPanel>
      ))}
    </TabsBody>
  </Tabs>

  </div>
  )
}

export default Reports