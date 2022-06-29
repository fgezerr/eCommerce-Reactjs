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
import { FetchCategoryList } from "../../api";
import { useQuery } from "react-query";
import Navbar from "../../components/Header/Navbar";

function CategoryManagement() {
  const { isLoading, error, data } = useQuery("categories", FetchCategoryList);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Navbar />

      <Box display="flex" justifyContent="center" gap="10" mt="8">
        <Box>
          <Button>Add Parent Category</Button>
        </Box>

        <Box>
          <Button>Add Sub Category</Button>
        </Box>
      </Box>

      <TableContainer display="flex" justifyContent="center" mx="40" my="10">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Parent Categories</Th>
              <Th>Sub Categories</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                {data.data.map((item, id) => (
                  <div key={id}>{item.name}</div>
                ))}
              </Td>
              <Td>millimetres (mm)</Td>
              <Td as={Button}>Edit</Td>
            </Tr>
            {/* <Tr>
               <Td>feet</Td> 
              <Td>centimetres (cm)</Td>
              <Td as={Button}>Edit</Td>
            </Tr>
            <Tr>
              <Td>yards</Td> 
              <Td>metres (m)</Td>
              <Td as={Button}>Edit</Td>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CategoryManagement;
