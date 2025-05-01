import { useCallback } from 'react';
import useServiceDelete from './useServiceDelete';


const useConfirmServiceDelete = (refetch, closeModal) => {
  const { handleDelete } = useServiceDelete();

  const confirmDelete = useCallback(
    async (service) => {
      if (!service) return;

      await handleDelete({
        id: service.id,
        customerName: `${service.name}`,
        onSuccess: refetch,
      });

      closeModal();
    },
    [handleDelete, refetch, closeModal]
  );

  return { confirmDelete };
};

export default useConfirmServiceDelete;
