import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box, Heading, HStack, Input, Button, VStack, Checkbox, Text, IconButton, useToast
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { getGroupById, updateGroup } from "../utils/storage";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const [group, setGroup] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const g = getGroupById(id);
    if (!g) {
      toast({ title: "Data tidak ditemukan", status: "error", duration: 1500 });
      navigate("/");
      return;
    }
    setGroup(g);
  }, [id, navigate, toast]);

  const sync = (nextGroup) => {
    setGroup(nextGroup);
    updateGroup(nextGroup);
  };

  const addNote = () => {
    const text = value.trim();
    if (!text) return;
    const note = { id: String(Date.now()), text, completed: false };
    sync({ ...group, notes: [...group.notes, note] });
    setValue("");
  };

  const toggleNote = (noteId) => {
    const notes = group.notes.map(n => n.id === noteId ? { ...n, completed: !n.completed } : n);
    sync({ ...group, notes });
  };

  const deleteNote = (noteId) => {
    const notes = group.notes.filter(n => n.id !== noteId);
    sync({ ...group, notes });
  };

  if (!group) return null;

  return (
    <Box>
      <Button variant="ghost" mb={3} onClick={() => navigate(-1)}>
        ⬅ Kembali
      </Button>

      <Heading size="lg" color="blue.700" mb={4}>
        Catatan: {group.date}
      </Heading>

      <HStack mb={4}>
        <Input
          placeholder="Tulis catatan / todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNote()}
        />
        <Button colorScheme="blue" onClick={addNote}>
          Tambah
        </Button>
      </HStack>

      <VStack spacing={3} align="stretch">
        {group.notes.length === 0 && (
          <Text color="gray.500" fontStyle="italic">Belum ada catatan.</Text>
        )}

        {group.notes.map(note => (
          <HStack
            key={note.id}
            p={3}
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            justify="space-between"
          >
            <Checkbox
              isChecked={note.completed}
              onChange={() => toggleNote(note.id)}
            >
              <Text as={note.completed ? "s" : undefined}>{note.text}</Text>
            </Checkbox>
            <IconButton
              aria-label="Hapus"
              icon={<DeleteIcon />}
              size="sm"
              colorScheme="red"
              variant="ghost"
              onClick={() => deleteNote(note.id)}
            />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}

export default DetailPage;
