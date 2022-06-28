import React from "react";
import Card from "../../components/Card";
import { useQuery } from "react-query";
import { useStateValue } from "../../contexts/StateProvider";

import {
  SimpleGrid,
  Box,
  Button,
  MenuButton,
  Menu,
  Icon,
  MenuList,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { FetchProductList } from "../../api";

function Products() {
  const [{ basket, user }] = useStateValue();
  const { isLoading, error, data } = useQuery("products", FetchProductList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <nav>
        <Box
          justifyContent="space-between"
          display="flex"
          alignItems="center"
          borderBottom=".5px solid lightgray"
          h="10"
          p={10}
        >
          <Box>
            <Menu>
              <MenuButton
                display="flex"
                alignContent="center"
                as={Button}
                w="40"
                rightIcon={<Icon as={BsChevronDown} />}
              >
                {user ? user : "User"}
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
          <Box display="flex" alignContent="center">
            <Link to="/shoppingcart">
              <Button colorScheme="pink">Cart {basket?.length}</Button>
            </Link>
          </Box>
        </Box>
      </nav>
      <Box display="flex" justifyContent="space-evenly" mt="5">
        <Menu display="flex">
          <MenuButton
            display="flex"
            alignItems="center"
            as={Button}
            rightIcon={<Icon as={BsChevronDown} />}
          >
            Multi Type Filter
          </MenuButton>
          <MenuList>
            <Box w="40" display="flex" justifyContent="center">
              <Link to="/">
                <Button>LogOut</Button>
              </Link>
            </Box>
          </MenuList>
        </Menu>

        <Box>
          <Input type="text" placeholder="Search.."></Input>
        </Box>
      </Box>
      <SimpleGrid mx="40" my="10" columns={[1, 2, 3]} spacing="80px">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </div>
  );
}

export default Products;
