import { Box, Heading, Button, FormControl, FormLabel, Flex, Input } from "@chakra-ui/react"
import { useFormik } from "formik";
import validationSchema from "./validations";

function Signup() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passworConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      console.log(values);
    }
  })



  return (
    <div id="content">
      <Flex align="center" justifyContent="center" width="full" >

        <Box pt={10}>

          <Box textAlign="center">
            <Heading color="pink.500">Sign Up</Heading>
          </Box>

          <Box my={5} textAlign="left">

            <form onSubmit={formik.handleSubmit}>

              <FormControl mt={4}>
                <FormLabel color="pink.500" textAlign="center">E-mail</FormLabel>
                <Input name="email"
                 onChange={formik.handleChange} 
                 onBlur={formik.handleBlur} 
                 value={formik.values.email}
                 isInvalid={formik.touched.email && formik.errors.email}
                 ></Input>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color="pink.500" textAlign="center">Password</FormLabel>
                <Input name="password" 
                type="password" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                value={formik.values.password} 
                isInvalid={formik.touched.password && formik.errors.password}
                ></Input>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color="pink.500" textAlign="center">PasswordConfirm</FormLabel>
                <Input name="passwordConfirm"
                 type="password"
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  value={formik.values.passwordConfirm}
                  isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                  ></Input>
              </FormControl>

              <Button mt={4} width="full" type="submit">Sign Up</Button>

            </form>

          </Box>

        </Box>
      </Flex>
    </div>
  )
}

export default Signup; 