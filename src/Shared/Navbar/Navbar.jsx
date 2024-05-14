
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

  const { user, logOut } = UseAuth();
  const [openNav, setOpenNav] = useState(false);
  const [theme , setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('theme' , theme) ;
    const localTheme = localStorage.getItem('theme') ;
    document.querySelector('html').setAttribute('data-theme' , localTheme) ;
  } , [theme])

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline" : ""
          }
        >
          Home
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink
          to={"/addFood"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline" : ""
          }
        >
          Add Food
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink
          to={"/availableFoods"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline" : ""
          }
        >
          Available Foods
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink
          to={"/manageMyFoods"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline" : ""
          }
        >
          Manage My Foods
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink
          to={"/myFoodRequest"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold underline" : ""
          }
        >
          My Food Request
        </NavLink>
      </Typography>
    </ul>
  );

  const handlelogOut = () => {
    logOut();
  };

  const handleToogle = (e) => {
    if(e.target.checked){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }

  return (
    <div className="">
      <Navbar className="sticky top-0 z-10 h-max max-w-full shadow-none rounded-none border px-4 py-2 lg:px-0 lg:py-0">
        <div className="flex items-center justify-between text-blue-gray-900 max-w-[1440px] mx-auto">
          <Typography className="mr-4 text-2xl flex items-center gap-4 cursor-pointer py-1.5 font-semibold">
            <img
              className="h-10 w-10 xl:w-20 xl:h-20 rounded-full p-1 border"
              src="https://img.freepik.com/premium-vector/fresh-food-logo-food-share-logo-design-template_664675-595.jpg"
              alt=""
            />
            Feast Forward
          </Typography>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <label className="swap swap-rotate lg:mr-6 p-2 rounded-full">
                
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onChange={handleToogle}/>
                
                {/* sun icon */}
                <svg className=" swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                
                {/* moon icon */}
                <svg className=" swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                
            </label>

            <div className="flex items-center gap-x-1">
              {user ? (
                <div className="flex items-center justify-between">
                  <div className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      role="button"
                      className=" m-1 hidden lg:flex"
                    >
                      <img
                        className="w-[45px] h-[45px] rounded-full hidden lg:flex"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                    <div
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-gray-400 rounded-box w-52"
                    >
                      <h1 className="m-1 border p-1 rounded-md font-semibold">
                        {user?.displayName}
                      </h1>
                      <h1 className="m-1 border p-1 rounded-md font-semibold">
                        {user?.email}
                      </h1>
                      <Button onClick={handlelogOut} className="my-2 w-full">
                        Log Out
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link to={"/login"}>
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block border border-[#282828] hover:shadow-none hover:bg-transparent"
                    >
                      Login
                    </Button>
                  </Link>

                  <Link to={"/Register"}>
                    <Button
                      variant="gradient"
                      size="sm"
                      className="hidden lg:inline-block border border-[#282828] hover:shadow-none"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
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
          {user ? (
                <div className="">
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className=" m-1">
                      <img
                        className="w-[45px] h-[45px] rounded-full flex lg:hidden"
                        src={user?.photoURL}
                        alt=""
                      />
                      </div>
                    <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gray-400 rounded-box w-52">
                      <h1 className="m-1 text-gray-900 border rounded-md p-1 font-semibold">{user?.displayName}</h1>
                      <h1 className="m-1 text-gray-900 border rounded-md p-1 font-semibold">{user?.email}</h1>
                      <Button onClick={handlelogOut} className="my-2 w-full">Log Out</Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-x-1">
                  <Link to={"/login"} className="">
                    <Button
                      className="border-2 hover:bg-[#343434] border-[#343434] hover:text-white"
                      variant="text"
                      size="sm"
                    >
                      Log In
                    </Button>
                  </Link>

                  <Link to={"/register"} className="">
                    <Button
                      className="hover:bg-none border-2 border-[#343434] hover:shadow-none hover:text-gray-800"
                      variant="gradient"
                      size="sm"
                    >
                      Register
                    </Button>
                  </Link>
                </div>
          )}
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Nav;
