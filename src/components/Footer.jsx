import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";


const footer = () => {
    return (
    <Box bg="gray.100" py={4} mt="auto" w="auto" maxW="100%">
    <Flex justify="center" align="center">
        <Text fontSize="sm" color="gray.600">
          © {new Date().getFullYear()} My App. All rights reserved.
        </Text>
      </Flex>
    </Box>

    );
};

export default footer;