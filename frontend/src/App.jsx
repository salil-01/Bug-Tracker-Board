import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <Center>
        <Stack margin={"20px auto"}>
          <Heading>Bug Tracking Board</Heading>
          <Text textAlign={"center"}>(Drag & Drop)</Text>
        </Stack>
      </Center>
      <Dashboard />
    </>
  );
}

export default App;
