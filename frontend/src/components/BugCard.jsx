import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  CardBody,
  Flex,
  HStack,
  Text,
  Tooltip,
} from "@chakra-ui/react";

export const BugCard = ({ id, name, color, handleDelete, columnId }) => {
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
            color={color === "yellow" ? "black" : "white"}
          >
            {name}
          </Text>
          <HStack gap={"0px"}>
            <Tooltip hasArrow label="Edit" bg="gray.300" color="black">
              <Button
                variant={"ghost"}
                width={"10px"}
                _hover={{ cursor: "pointer", color: "white" }}
              >
                <EditIcon color={color === "yellow" ? "black" : "white"} />
              </Button>
            </Tooltip>
            <Tooltip hasArrow label="Delete" bg="gray.300" color="black">
              <Button
                variant={"ghost"}
                width={"10px"}
                _hover={{ cursor: "pointer", color: "white" }}
                onClick={handleDeleteClick}
              >
                <DeleteIcon color={color === "yellow" ? "black" : "white"} />
              </Button>
            </Tooltip>
          </HStack>
        </Flex>
      </CardBody>
    </>
  );
};
