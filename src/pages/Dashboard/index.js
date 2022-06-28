import React from "react";
import {
  Box,
  Button,
  MenuButton,
  Menu,
  MenuList,
  Icon,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

function Dashboard() {
  return (
    <div>
      <nav>
        <Box
          display="flex"
          alignItems="center"
          borderBottom=".5px solid lightgray"
          h="50"
          p={10}
        >
          <Menu>
            <MenuButton
              display="flex"
              alignContent="center"
              as={Button}
              w="40"
              rightIcon={<Icon as={BsChevronDown} />}
            >
              User
            </MenuButton>
            <MenuList>
              <Box w="40" display="flex" justifyContent="center">
                <Link to="/">
                  <Button>LogOut</Button>
                </Link>
              </Box>
            </MenuList>
          </Menu>
        </Box>

        {/* //NAVBAR RİGHT */}
        {/* <div className={styles.right}>
          <Link to="/signin">
            <Button colorScheme="pink">Login</Button>
          </Link>
          <Link to="/signup">
            <Button colorScheme="pink">Register</Button>
          </Link>
        </div> */}
      </nav>

      <Box display="flex" justifyContent="center">
        <Box gap="20" mt="15" flexDirection="column">
          <Box
            justifyContent="space-between"
            alignItems="center"
            gap="5"
            m="15"
            bg="white"
            boxShadow="2xl"
            borderWidth="1px"
            p="5"
            borderRadius="lg"
            display="flex"
          >
            <Box>
              <Text>Main Categories </Text>
              <Text>Sub Categories </Text>
            </Box>
            <Box>
              <Text>total 3 </Text>
              <Text>total 7 </Text>
            </Box>

            <Box>
              <Link to="/categorymanagement">
                <Button>Category Management</Button>
              </Link>
            </Box>
          </Box>

          <Box
            justifyContent="space-between"
            alignItems="center"
            m="15"
            bg="white"
            boxShadow="2xl"
            borderWidth="1px"
            p="5"
            borderRadius="lg"
            display="flex"
          >
            <Box>Products</Box>
            <Box>total 20</Box>
            <Box>
              <Link to="/productmanagement">
                <Button>Product Management</Button>
              </Link>
            </Box>
          </Box>

          <Box display="flex" justifyContent="center">
            <Link to="/products">
              <Button colorScheme="pink">Show All Products</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;
