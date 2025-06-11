import { useEffect, useState } from "react";
import axios from "axios";
import { SimpleGrid, Spinner, Center, Text } from "@chakra-ui/react";
import LeadCard from "./LeadCard";
import LeadFilters from "./LeadFilters";
import type { Lead } from "../types";

const LeadList = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/leads")
      .then((res) => setLeads(res.data))
      .catch((err) => console.error("Error fetching leads:", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredLeads = leads.filter((lead) => {
    const search = keyword.toLowerCase();
    return (
      lead.company.toLowerCase().includes(search) ||
      lead.industry.toLowerCase().includes(search) ||
      lead.location.toLowerCase().includes(search)
    );
  });

  if (loading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (filteredLeads.length === 0) {
    return (
      <Center>
        <Text>No matching leads found.</Text>
      </Center>
    );
  }

  return (
    <>
      <LeadFilters keyword={keyword} setKeyword={setKeyword} />
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {filteredLeads.map((lead, index) => (
          <LeadCard key={index} lead={lead} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default LeadList;
