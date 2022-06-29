import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import { FetchCategoryList } from "../../api";
import { useQuery } from "react-query";

function Dashboard() {
  const { isLoading, error, data } = useQuery("categories", FetchCategoryList);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Navbar />

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
              <Text color="green" fontWeight="bold">
                Total {data.data.length}
              </Text>
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
