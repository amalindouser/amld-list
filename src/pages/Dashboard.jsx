import { Box, Button } from "@chakra-ui/react";
import { React } from "react";

const Dashboard = (setAuth) => {
  return (
    <Box p={6}>
        <Text fontSize = "2xl">Selamat Datang didashboard</Text>
        <Button colorScheme="red" mt={4} onClick={() => setAuth(false)}>Logout</Button>   
      <h1>Dashboard</h1>
    </Box>
  )
};

export default Dashboard; 

