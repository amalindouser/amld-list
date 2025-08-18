import {
  Box, IconButton, Drawer, DrawerOverlay, DrawerContent,
  DrawerHeader, DrawerCloseButton, DrawerBody, VStack, Text, useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  // Mobile: hamburger
  return (
    <>
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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <Link to="/" onClick={onClose}>
                <Text fontWeight={location.pathname === "/" ? "bold" : "normal"}>Home</Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Desktop sidebar */}
      <Box
        w="220px"
        bg="white"
        borderRight="1px solid"
        borderColor="gray.200"
        p={4}
        display={{ base: "none", md: "block" }}
      >
        <VStack align="start" spacing={4}>
          <Link to="/"><Text fontWeight={location.pathname === "/" ? "bold" : "normal"}>Home</Text></Link>
        </VStack>
      </Box>
    </>
  );
}

export default Sidebar;
