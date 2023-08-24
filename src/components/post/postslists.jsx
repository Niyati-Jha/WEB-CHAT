import Post from "./index"
import { Box, Text} from "@chakra-ui/react";

export default function PostLists({posts}){
    return (
    <Box px="4" align = "center">
        {posts?.length ===0 
        ? (
            <Text textAlign="center" fontSize="xl"> No post yet... Feeling A LITTLE LONELY..</Text>
        ):
         posts?.map(post => <Post key = {post.id} post ={post} />)}
    </Box>
    )
}