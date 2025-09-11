import {
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ setAuth }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // hapus status login
    setAuth(false); // update state di App.js
    navigate("/login"); // redirect ke login
    onClose(); // tutup drawer kalau mobile
  };

  return (
    <>
      {/* Mobile hamburger */}
      <IconButton
        aria-label="Menu"
        icon={<HamburgerIcon />}
        display={{ base: "inline-flex", md: "none" }}
        position="fixed"
        top="12px"
        left="12px"
        zIndex={1000}
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#3396D3" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <Link to="/home" onClick={onClose}>
                <Text
                  fontWeight={location.pathname === "/home" ? "bold" : "normal"}
                >
                  Home
                </Text>
              </Link>
              <Text as="button" onClick={handleLogout}>
                Logout
              </Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Desktop sidebar */}
      <Box
        w="220px"
        bg="#3396D3"
        borderRight="1px solid"
        borderColor="gray.200"
        p={4}
        display={{ base: "none", md: "block" }}
      >
        <VStack align="start" spacing={4}>
          <Link to="/home">
            <Text
              fontWeight={location.pathname === "/home" ? "bold" : "normal"}
              color="white"
            >
              Home
            </Text>
          </Link>
          <Text as="button" onClick={handleLogout} color="white">
            Logout
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default Sidebar;
