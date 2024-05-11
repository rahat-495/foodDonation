
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Nav = () => {

  const {user , logOut , loading} = UseAuth() ;
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink to={'/'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline" : ""
        }>
          Home
        </NavLink>
      </Typography>
        
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink to={'/addFood'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline" : ""
        }>
          Add Food
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink to={'/myFoods'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline" : ""
        }>
          My Foods 
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink to={'/availableFoods'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline" : ""
        }>
          Available Foods
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink to={'/myFoodRequest'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline" : ""
        }>
          My Food Request
        </NavLink>
      </Typography>

    </ul>
  );

  const handlelogOut = () => {
    logOut() ;
  }

  if(loading){
    return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-infinity loading-lg"></span>
  }

  return (
    <div className="">

      <Navbar className="sticky top-0 z-10 h-max max-w-full shadow-none border px-4 py-2 lg:px-0 lg:py-4">

        <div className="flex items-center justify-between text-blue-gray-900">

          <Typography
            className="mr-4 text-2xl cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography>

          <div className="flex items-center gap-4">

            <div className="mr-4 hidden lg:block">{navList}</div>

            <div className="flex items-center gap-x-1">

              {
                user ? 
                <div className="flex items-center justify-between">

                  <div className="dropdown dropdown-hover">
                      <div tabIndex={0} role="button" className=" m-1 hidden lg:flex">
                        <img
                          className="w-[45px] h-[45px] rounded-full hidden lg:flex"
                          src={user?.photoURL}
                          alt=""
                        />
                        </div>
                      <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gray-400 rounded-box w-52">
                        <h1 className="m-1 border p-1 rounded-md font-semibold">{user?.displayName}</h1>
                        <h1 className="m-1 border p-1 rounded-md font-semibold">{user?.email}</h1>
                        <Button onClick={handlelogOut} className="my-2 w-full">Log Out</Button>
                      </div>
                  </div>

                </div> :
                <div className="flex items-center gap-3">

                  <Link to={'/login'}>
                        <Button
                            variant="text"
                            size="sm"
                            className="hidden lg:inline-block border border-[#282828] hover:shadow-none hover:bg-transparent"
                        >Login
                        </Button>
                  </Link>

                  <Link to={'/Register'}>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block border border-[#282828] hover:shadow-none"
                        >Sign Up
                        </Button>
                  </Link>

                </div>
              }

            </div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>

          </div>

        </div>

        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>

      </Navbar>
      
    </div>
  );
};

export default Nav;
