import { useCallback } from 'react';
import useExpenseDelete from './useExpenseDelete';

const useConfirmExpenseDelete = (refetch, closeModal) => {
  const { handleDelete } = useExpenseDelete();

  const confirmDelete = useCallback(
    async (expense) => {
      if (!expense) return;

      await handleDelete({
        id: expense.id,
        expenseName: `${expense.name} `,
        onSuccess: refetch,
      });

      closeModal();
    },
    [handleDelete, refetch, closeModal]
  );

  return { confirmDelete };
};

export default useConfirmExpenseDelete;
