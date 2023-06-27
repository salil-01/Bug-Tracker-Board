import { EditIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  useDisclosure,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
export const EditModal = ({ bgColor, id, columnId, handleEdit }) => {
  //   console.log(disabled);
  const [name, setName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    handleEdit(columnId, id, name);
    onClose();
  };
  return (
    <>
      <Button
        variant={"ghost"}
        width={"10px"}
        _hover={{ cursor: "pointer", color: "white" }}
        onClick={onOpen}
      >
        <EditIcon color={bgColor === "yellow" ? "black" : "white"} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input onChange={(e) => setName(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Edit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
