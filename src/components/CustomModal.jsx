import PropTypes from "prop-types";
import { Button, Modal, Placeholder } from "rsuite";

const CustomModal = ({ children, onClose, onSave, isOpen, title }) => {
  return (
    <Modal overflow={false} size={"sm"} open={isOpen} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children ? children : <Placeholder.Paragraph rows={10} />}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} appearance="subtle">
          Hủy
        </Button>
        <Button type="submit" onClick={onSave} appearance="primary">
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

CustomModal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
};

export default CustomModal;
