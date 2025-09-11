import { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Heading,
  Input,
  Button,
  Checkbox,
  Text,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "amld" && password === "amld2312") {
      localStorage.setItem("isAuthenticated", "true");
      setAuth(true);
      navigate("/home");
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <Flex 
    minH="100vh" 
    align="center" 
    justify="center" 
    bg="white"
    w="100%"
    maxW="1700px" 
    p={6}>
      <Flex
        bg="white"
        boxShadow="lg"
        borderRadius="lg"
        overflow="hidden"
        w="100%"
        maxW="1700px" 
        direction={{ base: "column", md: "row" }}
      >
        {/* Kolom Gambar */}
        <Box flex="1" display="flex">
          <Image
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            alt="Login Illustration"
            objectFit="cover"
            w="100%"
            h={{ base: "200px", md: "100%" }}
          />
        </Box>

        {/* Kolom Form */}
        <Flex flex="1" align="center" justify="center" p={8}>
          <VStack spacing={4} w="100%" maxW="400px">
            <Heading size="lg" textAlign="center">
              Login
            </Heading>

            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Flex justify="space-between" align="center" w="100%" fontSize="sm">
              <Checkbox>Remember me</Checkbox>
              <Text color="blue.500" cursor="pointer">
                Forgot password?
              </Text>
            </Flex>

            <Button colorScheme="blue" w="100%" onClick={handleLogin}>
              Sign in
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Login;
