import {
  IconButton,
  Stack,
} from 'rsuite';
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from 'react-icons/md';

const NavToggle = ({ expand, onChange }) => {
  return (
    <Stack className="nav-toggle" justifyContent={expand ? 'flex-end' : 'center'}>
      <IconButton
        onClick={onChange}
        appearance="subtle"
        size="lg"
        icon={expand ? <MdKeyboardArrowLeft /> : <MdOutlineKeyboardArrowRight />}
      />
    </Stack>
  );
};

export default NavToggle;