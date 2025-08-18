import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

const AddTodoModal = ({ isOpen, onClose, onAddTodo, date }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return alert("Isi todo dulu ya!");
    onAddTodo(text);
    setText("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tambah Todo untuk {date}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Tulis tugas..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleAdd}>
            Tambah
          </Button>
          <Button onClick={onClose}>Batal</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddTodoModal;
