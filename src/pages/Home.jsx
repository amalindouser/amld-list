import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input
} from "@chakra-ui/react";
import AddCard from "../components/AddCard";
import DateCard from "../components/DateCard";
import { loadGroups, addGroup, deleteGroup } from "../utils/storage";

const Home = () => {
  const [groups, setGroups] = useState([]);
  const [date, setDate] = useState("");
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setGroups(loadGroups());
  }, []);

  const handleAddDate = () => {
    if (!date) return;
    try {
      const id = addGroup(date);
      setGroups(loadGroups());
      toast({ title: "Tanggal ditambahkan", status: "success", duration: 1500 });
      onClose(); // Tutup modal
      setDate(""); // Reset input
      // navigate(`/detail/${id}`);
    } catch (e) {
      toast({ title: e.message || "Gagal menambah", status: "warning", duration: 2000 });
    }
  };

  const handleDeleteDate = (id) => {
    if (!window.confirm("Hapus tanggal beserta semua catatan?")) return;
    deleteGroup(id);
    setGroups(loadGroups());
    toast({ title: "Tanggal dihapus", status: "info", duration: 1200 });
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  }

  return (
    <Box minH="auto" bg="white" w="auto" p={4} pl={20}>
      <Heading mb={6} textAlign="center" color="blue.600" fontSize={{ base: "xl", md: "2xl" }}>
        Catatan Per Tanggal
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
        <AddCard onClick={onOpen} />
        {groups.map((g) => (
          <DateCard key={g.id} id={g.id} date={g.date} onDelete={handleDeleteDate} />
        ))}
      </SimpleGrid>

      {/* MODAL INPUT TANGGAL */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Masukkan Tanggal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="YYYY-MM-DD"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleAddDate}>
              Simpan
            </Button>
            <Button onClick={onClose}>Batal</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Home;
