import {Center, 
  Heading, 
  Box, 
  FormControl, 
  FormLabel, 
  Input, 
  FormErrorMessage, 
  Text,
  Link,
  Button} 
  from "@chakra-ui/react"
import { DASHBOARD ,LOGIN} from "../../lib/routes";
import { Link as RouterLink} from "react-router-dom";
import { useRegister } from '../../hooks/auth'
import { useForm } from 'react-hook-form'
import { emailValidate, passwordValidate, usernameValidate } from "../../utils/form-validate";


export default function Register() {
  const {register: signup, isLoading} = useRegister();


  const {
      register, 
      handleSubmit, 
      formState:{errors}   
       } = useForm();


  async function handleRegister(data){
     signup({
          username: data.username,
          email: data.email,
          password: data.password,
          redirectTo: DASHBOARD,
      });

     
  }

  



  return (
  <Center w="100" h="100vh">
      <Box mx="1" maxW="md" p ="9" borderWidth="1px" borderRadius="lg">
          <Heading mb = "4" size ="lg" textAlign="center">
              REGISTER
          </Heading>

          <form onSubmit={handleSubmit(handleRegister)}>
              <FormControl isInvalid={errors.username} py="2">
                  <FormLabel>Username</FormLabel>
                  <Input 
                  
                  placeholder="username"    
                  {...register("username", usernameValidate)}/>

                  <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>

               </FormControl>

               <FormControl isInvalid={errors.email} py="2">
                  <FormLabel>email</FormLabel>
                  <Input 
                  type = "email"
                  placeholder="Enter the email"    
                  {...register("email", emailValidate)}/>

                  <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>

               </FormControl>
               <FormControl isInvalid={errors.password} py="2">
                  <FormLabel>Password</FormLabel>
                  <Input 
                  type="password" 
                  placeholder="password123"
                  {...register("password", passwordValidate)}/>
                  <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
               </FormControl>
          <Button mt="4" 
          type="submit" 
          colorScheme="teal" 
          size="md" 
          w="full" 
          isLoading={isLoading}
          loadingText="Signing up"
          >
            REGISTER
            </Button>


          </form>
{/* TO STYLE THE Register text link we can either use the react style prop in Link But instead
of using react style prop from react we use ChakraUI's Link component. Also there is a clash 
between the Link of chakra UI and react-router-dom hence Link as RouterLink*/}

     
      <Text fontSize="xlg" align="center" mt="6">ALready have an account?{" "}
          <Link 
          as={RouterLink}
          to={ LOGIN } 
          color="teal.800"
          fontWeight="medium"
          textDecor="underline"
          _hover={{background: "teal.100"}}>Log in </Link> instead!</Text>
      </Box>
  </Center>
)
}
