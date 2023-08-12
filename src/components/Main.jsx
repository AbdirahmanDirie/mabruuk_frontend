import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Main = ({children}) => {
  return (
    <div className="flex">
      {/* <Sidebar/> */}

      {/*Navbar  */}
      <div className='w-full'>
        <Navbar/>

      {/* Main */}
      {children}
      </div>
      


    </div>
  )
}

export default Main