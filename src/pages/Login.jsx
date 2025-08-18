import { useState } from "react";
import { Box, Input, Button, Heading, VStack, Text } from "@chakra-ui/react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Contoh validasi sederhana (hardcode)
    if (username === "admin" && password === "123456") {
      setError("");
      onLogin(username); // Kirim username ke parent kalau sukses login
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt="20" p={6} boxShadow="md" borderRadius="md">
      <Heading mb={6} textAlign="center">
        Login
      </Heading>
      <VStack spacing={4}>
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
        {error && <Text color="red.500">{error}</Text>}
        <Button colorScheme="blue" width="full" onClick={handleSubmit}>
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
