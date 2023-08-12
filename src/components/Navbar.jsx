import React, { useState } from "react";
import { BiDownArrow, BiLogOutCircle, BiPencil, BiUser } from 'react-icons/bi';
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {Link, useNavigate} from 'react-router-dom'
import Avatar from 'react-avatar';
import Sidebar from "./Sidebar";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const id = user?.id;

  const logout = () => {
    localStorage.clear();
    navigate('/login')
   }
  
  return (
    <div className="">
    <div className="flex flex-row items-center justify-between bg-[#489EE7] shadow px-5 py-2">
      <div className="flex gap-x-3">
        <Sidebar/>
        <p className="text-[18px] text-white">Welcome Back <span className="text-[#fff] italic font-semibold capitalize">{user?.firstName}💕</span> </p>
      </div>
      



      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center justify-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          {
          user?.image?.filePath ? (
             <img src={user?.image?.filePath} alt={user?.image?.fileName} className='h-[50px] w-[50px] object-cover rounded-full shadow-lg' />
          ) :(
            <Avatar size="40" className='object-cover rounded-full mb-4' name={user && user.firstName} />
          )
        }
          <BiDownArrow
            strokeWidth={2.5}
            className={`h-3 w-3 text-white transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        <MenuItem >
          <Link to={`/profile/${id}`} className="flex items-center space-x-3">
            <BiUser/>
        <Typography>My Profile</Typography>
          </Link>
        </MenuItem>

        <MenuItem className="flex items-center space-x-3" onClick={logout}>
        <BiLogOutCircle/>
        <Typography>Logout</Typography>
        </MenuItem>

      </MenuList>
      </Menu>
    </div>
    </div>
  )
}

export default Navbar
