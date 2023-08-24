import { Flex, Button, Text, Box } from "@chakra-ui/react";
import Avatar from "../profile/Avatar";
import { useUser } from "../../hooks/users";
import {formatDistanceToNow} from "date-fns";
import Usernamebutton from "../profile/Usernamebutton";

export default function Header({ uid, date}){
    const {user, isLoading} = useUser(uid);
    if(isLoading ) return 'Loading...';
    return (
        <Flex 
            alignItems = "center"
            borderBottom = "2px solid"
            borderColor = " teal.100"
            p="3"
            bg = "gray.50"
            >
            <Avatar user = {user} size = "md"/>

            <Box ml = "4">
               <Usernamebutton user = {user} />
                <Text fontsize = "sm" color = "gray.500">
                    {formatDistanceToNow(date)} ago 
                </Text>
                    
            </Box>

            </Flex>
    );
}