import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  MenuButton,
  Menu,
  MenuList,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

function index() {
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
              rightIcon={<Icon fontWeight="bold" as={BsChevronDown} />}
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
      </nav>

      <Box display="flex" justifyContent="center" gap="10" mt="8">
        <Box>
          <Button>Add Parent Category</Button>
        </Box>

        <Box>
          <Button>Add Parent Category</Button>
        </Box>
      </Box>

      <TableContainer display="flex" justifyContent="center" mx="40" my="10">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td as={Button}>Edit</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td as={Button}>Edit</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td as={Button}>Edit</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default index;
