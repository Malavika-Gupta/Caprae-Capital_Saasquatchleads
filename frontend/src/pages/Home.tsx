import { VStack, Text } from "@chakra-ui/react";
import LeadList from "../components/LeadList";

function Home() {
  return (
    <VStack spacing={6} align="stretch">
      <Text fontSize="lg" fontWeight="medium">
        Showing all available leads:
      </Text>
      <LeadList />
    </VStack>
  );
}

export default Home;
