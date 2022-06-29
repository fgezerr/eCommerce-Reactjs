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
import { Box, Button } from "@chakra-ui/react";
import Navbar from "../../components/Header/Navbar";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData(
    "Lasania Chicken Fri",
    18908424,
    "2 March 2022",
    "Approved",
    "Detail"
  ),
  createData("Big Baza Bang", 18908424, "2 March 2022", "Pending", "Detail"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved", "Detail"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered", "Detail"),
];

function ProductManagement() {
  return (
    <div>
      <Navbar />

      <Box display="flex" justifyContent="center" mt="8">
        <Box>
          <Button>Add Parent Category</Button>
        </Box>
      </Box>
      <TableContainer display="flex" justifyContent="center" mx="40" my="10">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Product Name</Th>
              <Th>Sub name</Th>
              <Th>Parent Name</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td as={Button}>Edit</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>30.48</Td>
              <Td as={Button}>Edit</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>0.91444</Td>
              <Td as={Button}>Edit</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProductManagement;
