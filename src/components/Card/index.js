import React from "react";
import { Button, Box, Image } from "@chakra-ui/react";
import { useStateValue } from "../../contexts/StateProvider";

function Card({ item }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item,
    });
  };
  return (
    <div>
      <Box h="400" borderWidth="1px" p="3" borderRadius="lg" bgColor="white">
        <Image
          h="265.67"
          w="auto"
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
          <Button onClick={addToBasket} colorScheme="pink">
            Add to Cart
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Card;
