import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { FetchLogin } from "../../../api";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
/* import { useStateValue } from "../../../contexts/StateProvider"; */

function Signin() {
  const { login, user } = useContext(AuthContext);
  console.log(user);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        login(values.email, values.password);
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <div id="content">
      <Flex align="center" justifyContent="center" width="full">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading color="pink.500">Sign In</Heading>
          </Box>

          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl mt={4}>
                <FormLabel color="pink.500" textAlign="center">
                  E-mail
                </FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                ></Input>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color="pink.500" textAlign="center">
                  Password
                </FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                ></Input>
              </FormControl>

              <Button mt={4} width="full" type="submit">
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Signin;

/* const [{}, dispatch] = useStateValue();
  const addUser = (event) => {
    dispatch({
      type: "ADD_USER",
      user: event.target.value,
    });
    console.log(event.target.value);
  };
  const setUserName = (event) => {
    addUser(event);
  }; */
