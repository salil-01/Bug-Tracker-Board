import { AddIcon } from "@chakra-ui/icons";
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
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
export const AddModal = ({ bug, disabled }) => {
  // console.log(disabled);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  //   const dispatch = useDispatch();
  const handleClick = () => {
    let obj = {
      id: +(Math.random() * 10000).toString().substring(0, 4),
      name,
    };
    // console.log(obj);
    if (bug == "critical") {
      dispatch(addCritical(obj));
    } else if (bug == "major") {
      dispatch(addMajor(obj));
    } else if (bug == "medium") {
      dispatch(addMedium(obj));
    } else if (bug == "low") {
      dispatch(addLow(obj));
    }
    onClose();
  };
  return (
    <>
      <Tooltip hasArrow label="Report a Bug" background={"gray"}>
        <AddIcon onClick={onOpen} />
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Bug</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input onChange={(e) => setName(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Add it
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
