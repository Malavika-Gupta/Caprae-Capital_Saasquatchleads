import { Input, Box } from "@chakra-ui/react";

interface LeadFiltersProps {
  keyword: string;
  setKeyword: (value: string) => void;
}

const LeadFilters = ({ keyword, setKeyword }: LeadFiltersProps) => {
  return (
    <Box mb={4}>
      <Input
        placeholder="Search by company, industry, or location"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        variant="filled"
      />
    </Box>
  );
};

export default LeadFilters;
