import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import PageDetail from "./pages/DetailPage";
import Login from "./pages/Login";

const App = () => {
  const [isAuthenticated, setAuth] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  return (
    <ChakraProvider>
      <Router>
        <Flex minH="100vh" w="auto">
          {/* ✅ Sidebar hanya muncul kalau sudah login */}
          {isAuthenticated && <Sidebar setAuth={setAuth} />}

          <Box flex="1" p={{ base: 3, md: 6 }}>
            <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/detail/:id"
            element={isAuthenticated ? <PageDetail /> : <Navigate to="/login" replace />}
          />
          {/* default: selalu ke login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;