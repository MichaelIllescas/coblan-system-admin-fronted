import { useState } from 'react';

const useEditModal = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return {
    selectedItem,
    modalVisible,
    openModal,
    closeModal,
  };
};

export default useEditModal;
