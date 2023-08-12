import {
  Card,
  Typography,
  IconButton 
} from "@material-tailwind/react";
import { BsPlusSquare, BsCardList, BsFillPatchCheckFill } from 'react-icons/bs';
// import {useGetCategoriesQuery} from '../services/categoryApi'
import {useGetUsersQuery} from '../services/userApi'
import {useGetclientsQuery} from '../services/clientApi'
import {
  useGetEventsQuery,
  useGetApprovedEventsQuery,
  useGetCanceledEventsQuery
} from '../services/eventApi'
import {
  useGetSumTransactionsQuery,
  useGetincomeTransactionsQuery,
  useGetexpenseTransactionsQuery,
} from '../services/transactionApi'
import { HiOutlineUsers } from 'react-icons/hi';
import { AiOutlineMoneyCollect, AiFillCloseCircle } from 'react-icons/ai';
import { BiUserVoice, BiMoney, BiMoneyWithdraw } from 'react-icons/bi';
import {PieChart, BarChart} from "../components/Chart";
import { useEffect, useState } from "react";


const Home = () => {

  // Api Call
  // const {data:categories} = useGetCategoriesQuery();
  const {data:users} = useGetUsersQuery();
  const {data:clients} = useGetclientsQuery();
  const {data:events} = useGetEventsQuery();
  const {data:transaction} = useGetSumTransactionsQuery();
  const {data:totalIncome} = useGetincomeTransactionsQuery();
  const {data:totalExpense} = useGetexpenseTransactionsQuery();
  const {data:approvedEvents} = useGetApprovedEventsQuery();
  const {data:cancelEvents} = useGetCanceledEventsQuery();

  
  
 


  return (
    <div className="mx-7 my-5">

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-5 gap-4">
        <Card className="rounded-md flex flex-row items-center p-6 gap-x-5">
          <IconButton variant="" color="red" className="rounded-full" size="lg">
          <BsCardList className="h-6 w-6 opacity-100"/>
      </IconButton>
          <div>
          <Typography variant="h4" color="black">{events && events?.length || 0}</Typography>
            <p className="text-gray-600">Total Events</p>
          </div>
        </Card>


        <Card className="rounded-md flex flex-row items-center p-6 gap-x-5">
          <IconButton variant="" color="amber" className="rounded-full" size="lg">
          <BiUserVoice className="h-6 w-6 opacity-100"/>
      </IconButton>
          <div>
          <Typography variant="h4" color="black">{clients && clients?.length || 0}</Typography>
            <p className="text-gray-600">Total Clients</p>
          </div>
        </Card>


        <Card className="rounded-md flex flex-row items-center p-6 gap-x-5">
          <IconButton variant="" color="indigo" className="rounded-full" size="lg">
          <HiOutlineUsers className="h-6 w-6 opacity-100"/>
      </IconButton>
          <div>
          <Typography variant="h4" color="black">{users && users?.length || 0}</Typography>
            <p className="text-gray-600">Total Users</p>
          </div>
        </Card>

        <Card className="rounded-md flex flex-row items-center p-6 gap-x-5">
          <IconButton variant="" color="teal" className="rounded-full" size="lg">
          <BsFillPatchCheckFill className="h-6 w-6 opacity-100"/>
      </IconButton>
          <div>
          <Typography variant="h4" color="black">{approvedEvents && approvedEvents?.length || 0}</Typography>
            <p className="text-gray-600">Approved Events</p>
          </div>
        </Card>

        <Card className="rounded-md flex flex-row items-center p-6 gap-x-5">
          <IconButton variant="" color="pink" className="rounded-full" size="lg">
          <AiFillCloseCircle className="h-6 w-6 opacity-100"/>
      </IconButton>
          <div>
          <Typography variant="h4" color="black">{cancelEvents && cancelEvents?.length || 0}</Typography>
            <p className="text-gray-600">Canceled Events</p>
          </div>
        </Card>


        <Card className="rounded-md flex flex-row items-center p-6 gap-x-5">
          <IconButton variant="" color="green" className="rounded-full" size="lg">
          <AiOutlineMoneyCollect className="h-6 w-6 opacity-100"/>
      </IconButton>
          <div>
          <Typography variant="h4" color="black">$ {totalIncome && totalIncome || 0}</Typography>
            <p className="text-gray-600">Total Revenu</p>
          </div>
        </Card>

        <Card className="rounded-md flex flex-row items-center p-6 gap-x-5">
          <IconButton variant="" color="purple" className="rounded-full" size="lg">
          <BiMoneyWithdraw className="h-6 w-6 opacity-100"/>
      </IconButton>
          <div>
          <Typography variant="h4" color="black">$ {totalExpense && totalExpense || 0 }</Typography>
            <p className="text-gray-600">Total Expense</p>
          </div>
        </Card>

        <Card className="rounded-md flex flex-row items-center p-6 gap-x-5">
          <IconButton variant="" color="Emerald" className="rounded-full" size="lg">
          <BiMoney className="h-6 w-6 opacity-100"/>
      </IconButton>
          <div>
          <Typography variant="h4" color="black">{transaction && transaction || 0}</Typography>
            <p className="text-gray-600">{transaction > 0? (
        <p>Net Income: {transaction}</p>
      ) : (
        <p>Net Loss: {transaction * -1}</p>
      )}</p>
          </div>
        </Card>
       
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-4 col-span-1">
        <div className="bg-white p-5 rounded-md flex justify-center items-center h-96">
          <PieChart/>
        </div>

        <div className="bg-white p-5 rounded-md col-span-2 flex justify-center items-center h-96">
          <BarChart/>
        </div>
        
      </div>
      
        
    </div>
  )
}

export default Home