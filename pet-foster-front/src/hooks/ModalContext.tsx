import React, { createContext, useContext, useState } from 'react';

// Create a Context for the modal
const ModalContext = createContext({
    isActive: false,
    openModal: () => {},
    closeModal: () => {},
  });

// Create a provider component
export const ModalProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const openModal = () => {
    setIsActive(true);
  };

  const closeModal = () => {
    setIsActive(false);
  };

  return (
    <ModalContext.Provider value={{ isActive, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the ModalContext
export const useModal = () => {
  return useContext(ModalContext);
};
