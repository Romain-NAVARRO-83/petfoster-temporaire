import { useState } from 'react';
import { Modal, Button, Box } from 'react-bulma-components';

const MyModal = () => {
  const [isActive, setIsActive] = useState(false);

  const openModal = () => {
    setIsActive(true);
  };

  const closeModal = () => {
    setIsActive(false);
  };

  return (
    <>
      <Button color="primary" onClick={openModal}>
        Open Modal
      </Button>

      <Modal show={isActive} onClose={closeModal} closeOnBlur={true}>
        <Modal.Content>
          <Box>
           <p>Contenu de la modale</p>
            <Button color="primary" onClick={closeModal}>
              Close
            </Button>
          </Box>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default MyModal;
