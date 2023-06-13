// import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Card, CardBody, Flex, Stack, Text } from "@chakra-ui/react";
const criticalBug = [
  {
    id: 1,
    name: "bug1",
  },
  {
    id: 2,
    name: "bug2",
  },
  {
    id: 3,
    name: "bug3",
  },
];
export const Dashboard = () => {
  // console.log(criticalBug);
  return (
    <>
      {/* <Navbar /> */}
      <Flex
        gap={"10px"}
        justifyContent={"space-evenly"}
        width={"90%"}
        margin={"30px auto"}
        padding={"10px"}
      >
        <Stack width={"20%"}>
          {/* <AddModal bug={"critical"} disabled={critDis} /> */}
          <Card>
            <CardBody
              backgroundColor={"red"}
              color={"white"}
              borderRadius={"5px"}
            >
              <Text fontSize={"1.1rem"}>Critical Severity</Text>
            </CardBody>
          </Card>
          {criticalBug?.map((el) => (
            <Card key={el.id}>
              <CardBody
                backgroundColor={"red"}
                color={"white"}
                borderRadius={"5px"}
              >
                <Flex justifyContent={"space-around"} alignItems={"center"}>
                  <Text fontSize={"1.1rem"}>{el.name}</Text>
                  {/* <EditModal bug={"critical"} id={el.id} />
                  <DeleteIcon
                    onClick={() => handleDelete(el.id, "critical")}
                    boxSize={"18px"}
                  /> */}
                </Flex>
              </CardBody>
            </Card>
          ))}
        </Stack>
        {/* <Stack width={"20%"}>
            <AddModal bug={"major"} disabled={majDis} />
            <Card>
              <CardBody
                backgroundColor={"yellow"}
                color={"black"}
                borderRadius={"5px"}
              >
                <Text fontSize={"1.1rem"}>Major Severity</Text>
              </CardBody>
            </Card>
            {majorBug?.map((el) => (
              <Card key={el.id}>
                <CardBody
                  backgroundColor={"yellow"}
                  color={"black"}
                  borderRadius={"5px"}
                >
                  <Flex justifyContent={"space-around"} alignItems={"center"}>
                    <Text fontSize={"1.1rem"}>{el.name}</Text>
                    <EditModal bug={"major"} id={el.id}/>
                    <DeleteIcon
                      onClick={() => handleDelete(el.id, "major")}
                      boxSize={"18px"}
                    />
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </Stack>
          <Stack width={"20%"}>
            {" "}
            <AddModal bug={"medium"} disabled={medDis} />
            <Card>
              <CardBody
                backgroundColor={"blue"}
                color={"white"}
                borderRadius={"5px"}
              >
                <Text fontSize={"1.1rem"}>Medium Severity</Text>
              </CardBody>
            </Card>
            {mediumBug?.map((el) => (
              <Card key={el.id}>
                <CardBody
                  backgroundColor={"blue"}
                  color={"white"}
                  borderRadius={"5px"}
                >
                  <Flex justifyContent={"space-around"} alignItems={"center"}>
                    <Text fontSize={"1.1rem"}>{el.name}</Text>
                    <EditModal bug={"medium"} id={el.id}/>
                    <DeleteIcon
                      onClick={() => handleDelete(el.id, "medium")}
                      boxSize={"18px"}
                    />
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </Stack>
          <Stack width={"20%"}>
            {" "}
            <AddModal bug={"low"} disabled={lowDis} />
            <Card>
              <CardBody
                backgroundColor={"green"}
                color={"white"}
                borderRadius={"5px"}
              >
                <Text fontSize={"1.1rem"}>Low Severity</Text>
              </CardBody>
            </Card>
            {lowBug?.map((el) => (
              <Card key={el.id}>
                <CardBody
                  backgroundColor={"green"}
                  color={"white"}
                  borderRadius={"5px"}
                >
                  <Flex justifyContent={"space-around"} alignItems={"center"}>
                    <Text fontSize={"1.1rem"}>{el.name}</Text>
                    <EditModal bug={"low"} id={el.id}/>
                    <DeleteIcon
                      onClick={() => handleDelete(el.id, "low")}
                      boxSize={"18px"}
                    />
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </Stack> */}
      </Flex>
    </>
  );
};
