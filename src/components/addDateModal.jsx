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
  useDisclosure,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

const AddDateModal = ({ isOpen, onClose, onAddDate }) => {
  const [date, setDate] = useState("");

  const handleAdd = () => {
    if (!date) return alert("Pilih tanggal dulu ya!");
    onAddDate(date);
    setDate("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tambah Tanggal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Calendar
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Pilih tanggal"
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

export default AddDateModal;
