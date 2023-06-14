import { CardBody, Flex, Text } from "@chakra-ui/react";

export const BugCard = ({ name, color }) => {
  return (
    <>
      <CardBody>
        <Flex justifyContent={"space-around"} alignItems={"center"}>
          <Text
            fontSize={"1.1rem"}
            color={color === "yellow" ? "black" : "white"}
          >
            {name}
          </Text>
        </Flex>
      </CardBody>
    </>
  );
};
