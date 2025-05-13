import { useCallback } from 'react';
import useCustomerDelete from './useCustomerDelete';

/**
 * Encapsula la lógica de eliminar un cliente, cerrar el modal y refetch.
 * 
 * @param {Function} refetch - Función para refrescar la lista
 * @param {Function} closeModal - Función para cerrar el modal
 * @returns {Function} confirmDelete - Función que ejecuta todo
 */
const useConfirmCustomerDelete = (refetch, closeModal) => {
  const { handleDelete } = useCustomerDelete();

  const confirmDelete = useCallback(
    async (customer) => {
      if (!customer) return;

      await handleDelete({
        id: customer.id,
        customerName: `${customer.firstName} ${customer.lastName}`,
        onSuccess: refetch,
      });

      closeModal();
    },
    [handleDelete, refetch, closeModal]
  );

  return { confirmDelete };
};

export default useConfirmCustomerDelete;
