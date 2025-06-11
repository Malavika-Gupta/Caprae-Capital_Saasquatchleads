import { Box, Text, Badge, Stack, Link } from "@chakra-ui/react";
import type { Lead } from "../types";

interface Props {
  lead: Lead;
}

const LeadCard = ({ lead }: Props) => {
  return (
    <Box borderWidth="1px" borderRadius="xl" p={5} bg="white" shadow="md">
      <Stack spacing={2} align="start">
        <Text fontWeight="bold" fontSize="xl">
          {lead.company}
        </Text>
        <Link href={lead.website} color="blue.500" target="_blank" rel="noopener noreferrer">
          {lead.website}
        </Link>
        <Text>{lead.industry} • {lead.location}</Text>
        <Badge colorScheme="green">
          {lead.employee_count || "N/A"} Employees
        </Badge>
        <Text fontSize="sm">Email: {lead.email}</Text>
        <Text fontSize="sm">Phone: {lead.phone}</Text>
        <Text fontSize="sm" color="gray.500">
          Owner: {lead.owner_name} ({lead.owner_email})
        </Text>
      </Stack>
    </Box>
  );
};

export default LeadCard;
