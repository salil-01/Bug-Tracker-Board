import { DeleteIcon } from "@chakra-ui/icons";
import { Button, CardBody, Flex, HStack, Text } from "@chakra-ui/react";
import { EditModal } from "./EditModal";

export const BugCard = ({
  id,
  name,
  bgColor,
  handleDelete,
  columnId,
  handleEdit,
}) => {
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
            <EditModal
              bgColor={bgColor}
              handleEdit={handleEdit}
              columnId={columnId}
              id={id}
            />

            <Button
              variant={"ghost"}
              width={"10px"}
              _hover={{ cursor: "pointer", color: "white" }}
              onClick={handleDeleteClick}
            >
              <DeleteIcon color={bgColor === "yellow" ? "black" : "white"} />
            </Button>
          </HStack>
        </Flex>
      </CardBody>
    </>
  );
};
