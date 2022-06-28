import React from "react";
import { Box, Button, MenuButton, Menu, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function index() {
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
        </Box>
      </nav>
      shoppingcart
    </div>
  );
}

export default index;
