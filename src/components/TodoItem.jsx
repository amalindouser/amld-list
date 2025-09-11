import { Box, Flex, Text, IconButton, Checkbox, VStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const TodoItem = ({ text, completed = false, onToggle, onDelete, id }) => {
  return (
    <Box
      p={3}
      bg={"#FFF0CE"}
      borderRadius="md"
      boxShadow="base"
      _hover={{ bg: completed ? "green.200" : "gray.50" }}
      transition="all 0.2s"
    >
      <VStack align="start" spacing={1}>
        <Flex align="center" justify="space-between" w="100%">
          <Checkbox
            isChecked={completed}
            onChange={onToggle}
            colorScheme="green"
          >
            <Text
              ml={2}
              as={completed ? "s" : undefined}
              color={completed ? "gray.500" : "gray.800"}
            >
              {text}
            </Text>
          </Checkbox>

          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            variant="ghost"
            size="sm"
            onClick={() => onDelete(id)}
            aria-label="Hapus todo"
          />
        </Flex>

        {completed && (
          <Text fontSize="sm" color="green.600" fontWeight="bold">
            ✅ Tugas selesai
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default TodoItem;
