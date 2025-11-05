import { HStack, IconButton, Stack, Text } from "rsuite";
import { FaReact } from "react-icons/fa";
import clsx from "clsx";

const Brand = ({ expand, onChange }) => {
  return (
    <HStack className={clsx("page-brand px-2", {})} spacing={12}>
      <Stack className="nav-toggle" justifyContent={"flex-start"}>
        <IconButton
          onClick={onChange}
          appearance="subtle"
          size="lg"
          icon={<FaReact size={20} />}
        />
      </Stack>
      {expand && <Text>Lịch</Text>}
    </HStack>
  );
};

export default Brand;
