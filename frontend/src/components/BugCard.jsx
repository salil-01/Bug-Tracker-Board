import { DeleteIcon } from "@chakra-ui/icons";
import { Button, CardBody, Flex, Text } from "@chakra-ui/react";

export const BugCard = ({ id, name, color, handleDelete, columnId }) => {
  const handleClick = () => {
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
          <Button
            variant={"ghost"}
            _hover={{ cursor: "pointer", bg: "red", color: "white" }}
            border={"1px solid"}
          >
            <DeleteIcon
              // border={"1px solid red"}
              onClick={handleClick}
              color={color === "yellow" ? "black" : "white"}
            />
          </Button>
        </Flex>
      </CardBody>
    </>
  );
};
