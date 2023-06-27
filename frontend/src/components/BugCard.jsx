import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  CardBody,
  Flex,
  HStack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { EditModal } from "./EditModal";

export const BugCard = ({ id, name, bgColor, handleDelete, columnId }) => {
  const handleDeleteClick = () => {
    // console.log(id);
    handleDelete(columnId, id);
  };
  return (
    <>
      <CardBody>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text
            fontSize={"1.1rem"}
            color={bgColor === "yellow" ? "black" : "white"}
          >
            {name}
          </Text>
          <HStack gap={"0px"}>
            <EditModal bgColor={bgColor} />
            <Tooltip hasArrow label="Delete" bg="gray.300" color="black">
              <Button
                variant={"ghost"}
                width={"10px"}
                _hover={{ cursor: "pointer", color: "white" }}
                onClick={handleDeleteClick}
              >
                <DeleteIcon color={bgColor === "yellow" ? "black" : "white"} />
              </Button>
            </Tooltip>
          </HStack>
        </Flex>
      </CardBody>
    </>
  );
};
