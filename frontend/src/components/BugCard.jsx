import { CardBody, Flex, Text } from "@chakra-ui/react";

export const BugCard = ({ name }) => {
  return (
    <>
      <CardBody>
        <Flex justifyContent={"space-around"} alignItems={"center"}>
          <Text fontSize={"1.1rem"}>{name}</Text>
        </Flex>
      </CardBody>
    </>
  );
};
