import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LOGIN } from "../../lib/routes"
import { useAuth } from "../../hooks/auth";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Box , Flex} from '@chakra-ui/react'

export default function Layout() {
    const location = useLocation(); //This is a react-router-dom Hook that gives us the location object
    const { pathname } = location;
    console.log(pathname) //a string that gives us the path
    
    const navigate = useNavigate();
    const {user,isLoading} = useAuth()

    useEffect(() => {
        if (!isLoading && pathname.startsWith("/protected") && !user){
            navigate(LOGIN)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pathname, user, isLoading])


    if (isLoading) return "Loading..."
  return (
    <>
    <Navbar/>
    <Flex pt = "16" pb ="12" mx="auto" maxW = "1200px">
      <Box w = "900px">
        <Outlet />
      </Box>
      <Sidebar/>
    </Flex>
   
    </>
  );
}
