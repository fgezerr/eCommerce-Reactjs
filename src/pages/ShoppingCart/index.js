import React from "react";
import Navbar from "../../components/Header/Navbar";
/* import { useStateValue } from "../../contexts/StateProvider"; */
/* import { Button, Box, Image } from "@chakra-ui/react"; */

function index() {
  /* const [{ basket }] = useStateValue(); */
  return (
    <div>
      <Navbar />
      {/*  <div>
        {basket.map((item) => (
          <Box
            display="flex"
            flexDirection={"column"}
            borderWidth="1px"
            p="3"
            borderRadius="lg"
            bgColor="red"
          >
            <Image
              h="265.67"
              overflow="hidden"
              src={item.image_path}
              alt="product"
              loading="lazy"
            />

            <Box pt="5">
              <Box
                d="flex"
                justifyContent="center"
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
              >
                {item.name}
              </Box>

              <Box d="flex" justifyContent="center">
                {item.price}
              </Box>
            </Box>

            <Box d="flex" justifyContent="center">
              <Button colorScheme="pink">Remove From Cart</Button>
            </Box>
          </Box>
        ))}
      </div> */}
    </div>
  );
}

export default index;
