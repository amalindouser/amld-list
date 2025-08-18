// src/components/Topbar.jsx
import { Box, Flex, Heading } from "@chakra-ui/react";

const Topbar = () => {
  return (
    <Box ml="200px" bg="blue.500" color="white" p={4}>
      <Flex align="center" justify="space-between">
        <Heading size="md">My Private App</Heading>
      </Flex>
    </Box>
  );
};

export default Topbar;
