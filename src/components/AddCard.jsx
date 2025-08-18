import { Card, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";


const AddCard = ({ onClick }) => {
  return (
    <Card
      w="100%"
      minH="180px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="2px dashed"
      borderColor="gray.300"
      bg="white"
      _hover={{ bg: "gray.50" }}
      cursor="pointer"
      onClick={onClick}
    >
      <IconButton
        icon={<AddIcon />}
        aria-label="Tambah Tanggal"
        colorScheme="blue"
        isRound
        size="lg"
      />
    </Card>
  );
}

export default AddCard;
