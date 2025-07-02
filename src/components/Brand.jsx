import { HStack, IconButton, Stack, Text } from "rsuite";
import { FaReact } from "react-icons/fa";

const Brand = ({ expand, onChange }) => {
  return (
    <HStack className="page-brand px-2 py-2" spacing={12}>
      <Stack className="nav-toggle" justifyContent={"flex-start"}>
        <IconButton
          onClick={onChange}
          appearance="subtle"
          size="lg"
          icon={<FaReact size={20} />}
        />
      </Stack>
      {expand && <Text>Brand</Text>}
    </HStack>
  );
};

export default Brand;
