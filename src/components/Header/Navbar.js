import React, { useContext } from "react";
import {
  Box,
  Button,
  MenuButton,
  Menu,
  MenuList,
  Icon,
  Text,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await logout();

      <Navigate to={"/"} />;
    } catch (e) {
      alert("Oturum Kapatılırken hata oluştu!.");
    }
  };
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
              rightIcon={<Icon as={BsChevronDown} />}
            >
              {user.name}
            </MenuButton>
            <MenuList>
              <Box w="40" display="flex" justifyContent="center">
                <Button onClick={handleLogout}>LogOut</Button>
              </Box>
            </MenuList>
          </Menu>
        </Box>
      </nav>
    </div>
  );
}

export default Navbar;
