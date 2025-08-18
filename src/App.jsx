import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import PageDetail from "./pages/DetailPage";



const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Flex minH="100vh" w="auto" bg="">
          <Sidebar />
          <Box flex="1" p={{ base: 3, md: 6 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<PageDetail />} />
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
