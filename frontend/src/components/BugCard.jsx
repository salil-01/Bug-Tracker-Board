import { DeleteIcon } from "@chakra-ui/icons";
import { CardBody, Flex, Text } from "@chakra-ui/react";

export const BugCard = ({ id, name, color }) => {
  const handleDelete = () => {
    console.log(id);
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
          <DeleteIcon
            onClick={handleDelete}
            _hover={{ cursor: "pointer" }}
            color={color === "yellow" ? "black" : "white"}
          />
        </Flex>
      </CardBody>
    </>
  );
};
