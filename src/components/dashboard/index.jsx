import {Box,Heading,Button ,HStack, Textarea} from '@chakra-ui/react';
import TextareaAutosize from 'react-textarea-autosize';
import {useForm } from "react-hook-form";
import { useAuth } from '../../hooks/auth';
import { useAddPost, usePosts } from '../../hooks/posts';
import PostLists from '../post/postslists';

export function NewPost(){
  const {register, handleSubmit, reset} = useForm();
  const {addPost, isLoading: addingPost} = useAddPost()
  const {user, isLoading: authLoading} = useAuth();
  

  function handleAddPost(data){
    addPost({
      uid: user.id,
      text: data.text,
    })
    reset();
  }
  return (
  <Box maxW="600px" mx="auto" py ="10">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify = "space-between">
          <Heading size ="lg" >New Post</Heading>
          <Button colorScheme = "teal" type = "submit" isLoading = {authLoading || addingPost} loadingText="loading...">Post</Button>
         
        </HStack>
        <Textarea as={TextareaAutosize} resize = "none" mt="5" placeholder="Create a new post..."
        minRows ={3}
        {...register("text", {required: true})}
        />
      </form>
    </Box>
  )
}


const Dashboard = () => {
  const {posts, isLoading} = usePosts();
  if(isLoading) return 'loading...';
  return(
    <>
    <NewPost/>
    <PostLists posts ={posts}/>
    
    </>
  )

}

export default Dashboard;