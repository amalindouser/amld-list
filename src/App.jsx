import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import PageDetail from "./pages/DetailPage";
import Login from "./pages/Login";
import Footer from "./components/Footer";

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
              {/* Login */}
              <Route path="/login" element={<Login setAuth={setAuth} />} />

              {/* Home / Dashboard */}
              <Route
                path="/home"
                element={
                  isAuthenticated ? <Home /> : <Navigate to="/login" replace />
                }
              />

              {/* Detail Page */}
              <Route
                path="/detail/:id"
                element={
                  isAuthenticated ? <PageDetail /> : <Navigate to="/login" replace />
                }
              />

              {/* ✅ Default route: cek status login */}
              <Route
                path="/"
                element={
                  isAuthenticated ? (
                    <Navigate to="/home" replace />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />

              {/* Catch all (jaga-jaga kalau ada path aneh) */}
              <Route
                path="*"
                element={
                  isAuthenticated ? (
                    <Navigate to="/home" replace />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
            </Routes>
          </Box>
        </Flex>
        {/* Kalau mau taruh Footer global */}
        <Footer />
      </Router>
    </ChakraProvider>
  );
};

export default App;
