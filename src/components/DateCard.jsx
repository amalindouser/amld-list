import { Card, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const DateCard = ({ id, date, onDelete }) =>{
  return (
    <Card p={4} w="100%" minH="180px" bg="white" boxShadow="sm" _hover={{ boxShadow: "md" }}>
      <Heading size="md" color="blue.700" mb={2} noOfLines={1}>
        {date}
      </Heading>
      <Text fontSize="sm" color="gray.600" mb={4}>
        Klik untuk melihat & menulis catatan
      </Text>

      <HStack spacing={3}>
        <Button as={Link} to={`/detail/${id}`} colorScheme="blue" size="sm">
          Buka Detail
        </Button>
        <Button onClick={() => onDelete(id)} size="sm" variant="outline" colorScheme="red">
          Hapus
        </Button>
      </HStack>
    </Card>
  );
}

export default DateCard;
