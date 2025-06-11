import { Box, Heading, Container } from "@chakra-ui/react";
import Home from "./pages/Home";

function App() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="6xl">
        <Heading mb={8} textAlign="center">
          🕵️ SaaSquatch Leads Tool
        </Heading>
        <Home />
      </Container>
    </Box>
  );
}

export default App;
