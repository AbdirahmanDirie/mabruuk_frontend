import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import Home from './pages/Home'
import EventList from './pages/EventList'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './ProtectedRoute'
import Category from './pages/Category'
import Service from './pages/Service'
import Client from './pages/Client'
import Users from './pages/Users'
import Profile from './pages/Profile'
import Reports from './pages/Reports'
import Today from './components/reports/users/Today'
import Yesterday from './components/reports/users/Yesterday'
import LastWeek from './components/reports/users/LastWeek'
import ThisMonth from './components/reports/users/ThisMonth'
import LastMonth from './components/reports/users/LastMonth'
import Last30days from './components/reports/users/Last30days'
import LastYear from './components/reports/users/LastYear'
import ThisYear from './components/reports/users/ThisYear'
import TodayClients from './components/reports/clients/TodayClients'
import YesterdayClients from './components/reports/clients/YesterdayClients'
import LastYearClients from './components/reports/clients/LastYearClients'
import ThisMonthClients from './components/reports/clients/ThisMonthClients'
import LastMonthClients from './components/reports/clients/LastMonthClients'
import Last30daysClients from './components/reports/clients/Last30daysclients'
import ThisYearClients from './components/reports/clients/ThisYearClients'
import TodayEvents from './components/reports/events/TodayEvents'
import YesterdayEvents from './components/reports/events/YesterdayEvents'
import LastYearEvents from './components/reports/events/LastYearEvents'
import ThisMonthEvents from './components/reports/events/ThisMonthEvents'
import LastMonthEvents from './components/reports/events/LastMonthEvents'
import Last30daysEvents from './components/reports/events/Last30daysEvents'
import ThisYearEvents from './components/reports/events/ThisYearEvents'
import LastWeekEvents from './components/reports/events/LastWeekEvents'
import Accountants from './pages/Accountants'
import EventBooked from './pages/EventBooked'
import EventApproved from './pages/EventApproved'
import EventCanceled from './pages/EventCanceled'
import YesterdayTransactions from './components/reports/transactions/YesterdayTransactions'
import TodayTransactions from './components/reports/transactions/TodayTransactions'
import ThisYearTransactions from './components/reports/transactions/ThisYearTransactions'
import ThisMonthTransactions from './components/reports/transactions/ThisMonthTransactions'
import LastYearTransactions from './components/reports/transactions/LastYearTransactions'
import Last30daysTransactions from './components/reports/transactions/Last30daysTransactions'
import LastMonthTransactions from './components/reports/transactions/LastMonthTransactions'
import LastWeekTransactions from './components/reports/transactions/LastWeekTransactions'
import CustomTransaction from './components/reports/transactions/CustomTransaction'
import CustomEvents from './components/reports/events/CustomEvents'
import CustomUsers from './components/reports/users/CustomUsers'
import CustomClients from './components/reports/clients/CustomClients'
import ProtectedBack from './ProtectedBack'
import Forgot from './pages/Forgot'
import ResetPassword from './pages/ResetPassword'


function App() {
 

  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>

      <Route path='/login' element={
        <ProtectedBack>
          <Login/>
        </ProtectedBack>
      
      } />

      <Route path='/forgot-password' element={
        <ProtectedBack>
          <Forgot/>
        </ProtectedBack>
      } />

      <Route path='/resetpassword/:resetToken' element={
        <ProtectedBack>
          <ResetPassword/>
        </ProtectedBack>
      } />

      <Route path="/" element={
        <ProtectedRoute>
      <Main>
        <Home/>
      </Main>
        </ProtectedRoute>
    }/>

      <Route path="/event-list" element={
        <ProtectedRoute>
      <Main>
        <EventList/>
      </Main>
      </ProtectedRoute>
    }/>

      <Route path="/event/booked" element={
        <ProtectedRoute>
      <Main>
        <EventBooked/>
      </Main>
        </ProtectedRoute>
      
    }/>

      <Route path="/event/approved" element={
        <ProtectedRoute>
        <Main>
        <EventApproved/>
      </Main>
        </ProtectedRoute>
    
    }/>

      <Route path="/event/canceled" element={
        <ProtectedRoute>
          <Main>
        <EventCanceled/>
      </Main>
        </ProtectedRoute>
      
    }/>

      <Route path="/clients" element={
         <ProtectedRoute>
          <Main>
        <Client/>
      </Main></ProtectedRoute>

      
    }/>

      <Route path="/category" element={
         <ProtectedRoute>
          <Main>
        <Category/>
      </Main>
         </ProtectedRoute>
      
    }/>

      <Route path="/service" element={
         <ProtectedRoute>
               <Main>
        <Service/>
      </Main> 
         </ProtectedRoute>

    }/>

      <Route path="/users" element={
         <ProtectedRoute>
                <Main>
        <Users/>
      </Main>
         </ProtectedRoute>
    }/>

      <Route path="/profile/:id" element={
         <ProtectedRoute>
                <Main>
        <Profile/>
      </Main>
         </ProtectedRoute>

    }/>
    
      <Route path="/reports" element={
         <ProtectedRoute>
        <Main>
        <Reports/>
      </Main>
         </ProtectedRoute>

    }/>
    
    {/* User report Routse */}
      <Route path="/reports/users/today" element={
         <ProtectedRoute>
                <Main>
        <Today/>
      </Main>
         </ProtectedRoute>

    }/>

      <Route path="/reports/users/yesterday" element={
         <ProtectedRoute>
          <Main>
        <Yesterday/>
      </Main>
         </ProtectedRoute>
      
    }/>

      <Route path="/reports/users/lastweek" element={
         <ProtectedRoute>
          <Main>
        <LastWeek/>
      </Main>
         </ProtectedRoute>
      
    }/>

      <Route path="/reports/users/thismonth" element={
         <ProtectedRoute>
          <Main>
        <ThisMonth/>
      </Main>
         </ProtectedRoute>
    }/>

      <Route path="/reports/users/lastmonth" element={
      <Main>
        <LastMonth/>
      </Main>
    }/>

      <Route path="/reports/users/last30days" element={
         <ProtectedRoute>
           <Main>
        <Last30days/>
      </Main>
         </ProtectedRoute>
     
    }/>

      <Route path="/reports/users/lastyear" element={
         <ProtectedRoute>
          <Main>
        <LastYear/>
      </Main>
         </ProtectedRoute>
      
    }/>

      <Route path="/reports/users/thisyear" element={
         <ProtectedRoute>
            <Main>
        <ThisYear/>
      </Main>
         </ProtectedRoute>
    
    }/>
      <Route path="/reports/users/custom" element={
         <ProtectedRoute>
          <Main>
        <CustomUsers/>
      </Main>
         </ProtectedRoute>
      
    }/>


    {/* Client Reports */}
      <Route path="/reports/clients/today" element={
         <ProtectedRoute>
                <Main>
        <TodayClients/>
      </Main>
         </ProtectedRoute>
    }/>

      <Route path="/reports/clients/yesterday" element={
         <ProtectedRoute>
                <Main>
        <YesterdayClients/>
      </Main>
         </ProtectedRoute>
    }/>

      <Route path="/reports/clients/lastweek" element={
         <ProtectedRoute>
                <Main>
        <LastYearClients/>
      </Main>
         </ProtectedRoute>

    }/>

      <Route path="/reports/clients/thismonth" element={
         <ProtectedRoute>
                <Main>
        <ThisMonthClients/>
      </Main>
         </ProtectedRoute>

    }/>

      <Route path="/reports/clients/lastmonth" element={
         <ProtectedRoute>
                <Main>
        <LastMonthClients/>
      </Main>
         </ProtectedRoute>
    }/>

      <Route path="/reports/clients/last30days" element={
         <ProtectedRoute>
              <Main>
        <Last30daysClients/>
      </Main>  
         </ProtectedRoute>

    }/>

      <Route path="/reports/clients/lastyear" element={
         <ProtectedRoute>
                <Main>
        <LastYearClients/>
      </Main>
         </ProtectedRoute>

    }/>

      <Route path="/reports/clients/thisyear" element={
         <ProtectedRoute>
                <Main>
        <ThisYearClients/>
      </Main>
         </ProtectedRoute>

    }/>
      <Route path="/reports/clients/custom" element={
         <ProtectedRoute>
          <Main>
        <CustomClients/>
      </Main>
         </ProtectedRoute>
      
    }/>


    {/* Events Reports */}
      <Route path="/reports/events/today" element={
         <ProtectedRoute>
           <Main>
        <TodayEvents/>
      </Main>
         </ProtectedRoute>
     
    }/>

      <Route path="/reports/events/yesterday" element={
         <ProtectedRoute>
          <Main>
        <YesterdayEvents/>
      </Main>
         </ProtectedRoute>
      
    }/>

      <Route path="/reports/events/lastweek" element={
         <ProtectedRoute>
          <Main>
        <LastWeekEvents/>
      </Main>
         </ProtectedRoute>
      
    }/>

      <Route path="/reports/events/thismonth" element={
         <ProtectedRoute>
          <Main>
        <ThisMonthEvents/>
      </Main>
         </ProtectedRoute>
      
    }/>

      <Route path="/reports/events/lastmonth" element={
         <ProtectedRoute>
          <Main>
        <LastMonthEvents/>
      </Main>
         </ProtectedRoute>
      
    }/>

      <Route path="/reports/events/last30days" element={
         <ProtectedRoute>
          <Main>
        <Last30daysEvents/>
      </Main>
         </ProtectedRoute>
      
    }/>

      <Route path="/reports/events/lastyear" element={
         <ProtectedRoute>
          <Main>
        <LastYearEvents/>
      </Main>
         </ProtectedRoute>
      
    }/>

      <Route path="/reports/events/thisyear" element={
         <ProtectedRoute>
                <Main>
        <ThisYearEvents/>
      </Main>
         </ProtectedRoute>

    }/>
      <Route path="/reports/events/custom" element={
         <ProtectedRoute>
                <Main>
        <CustomEvents/>
      </Main>
         </ProtectedRoute>

    }/>


    {/* Transaction Reports */}
      <Route path="/reports/transactions/today" element={
         <ProtectedRoute>
               <Main>
        <TodayTransactions/>
      </Main> 
         </ProtectedRoute>

    }/>

      <Route path="/reports/transactions/yesterday" element={
         <ProtectedRoute>
                <Main>
        <YesterdayTransactions/>
      </Main>
         </ProtectedRoute>

    }/>

      <Route path="/reports/transactions/lastweek" element={
         <ProtectedRoute>
                <Main>
        <LastWeekTransactions/>
      </Main>
         </ProtectedRoute>

    }/>

      <Route path="/reports/transactions/thismonth" element={
         <ProtectedRoute>
          <Main>
        <ThisMonthTransactions/>
      </Main>
         </ProtectedRoute>
      
    }/>

      <Route path="/reports/transactions/lastmonth" element={
         <ProtectedRoute>
                <Main>
        <LastMonthTransactions/>
      </Main>
         </ProtectedRoute>

    }/>

      <Route path="/reports/transactions/last30days" element={
         <ProtectedRoute>
               <Main>
        <Last30daysTransactions/>
      </Main> 
         </ProtectedRoute>

    }/>

      <Route path="/reports/transactions/lastyear" element={
         <ProtectedRoute>
                <Main>
        <LastYearTransactions/>
      </Main>
         </ProtectedRoute>
    }/>

      <Route path="/reports/transactions/thisyear" element={
         <ProtectedRoute>
                <Main>
        <ThisYearTransactions/>
      </Main>
         </ProtectedRoute>

    }/>
      <Route path="/reports/transactions/custom" element={
         <ProtectedRoute>
                <Main>
        <CustomTransaction/>
      </Main>
         </ProtectedRoute>

    }/>


      <Route path="/accountants" element={
         <ProtectedRoute>
                <Main>
        <Accountants/>
      </Main>
         </ProtectedRoute>

    }/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
