import { HStack ,Text} from "rsuite";
import { FaReact } from 'react-icons/fa';

const Brand = ({ expand }) => {
  return (
    <HStack className="page-brand" spacing={12}>
      <FaReact size={26} />
      {expand && <Text>Brand</Text>}
    </HStack>
  );
};

export default Brand;