import { useEffect, useState } from "react";
import axios from "axios";
import { SimpleGrid, Spinner, Center, Text } from "@chakra-ui/react";
import LeadCard from "./LeadCard";
import { Lead } from "../types";

const LeadList = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/leads")
      .then((res) => setLeads(res.data))
      .catch((err) => console.error("Error fetching leads", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Center><Spinner size="xl" /></Center>;
  }

  if (leads.length === 0) {
    return <Center><Text>No leads found.</Text></Center>;
  }

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6}>
      {leads.map((lead, index) => (
        <LeadCard key={index} lead={lead} />
      ))}
    </SimpleGrid>
  );
};

export default LeadList;
