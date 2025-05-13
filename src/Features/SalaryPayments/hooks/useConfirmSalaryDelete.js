import { useCallback } from 'react';
import useSalaryDelete from './useSalaryDelete';

const useConfirmSalaryDelete = (refetch, closeModal) => {
  const { handleDelete } = useSalaryDelete();

  const confirmDelete = useCallback(
    async (salary) => {
      if (!salary) return;

      await handleDelete({
        id: salary.id,
        expenseName: `${salary.name} `,
        onSuccess: refetch,
      });

      closeModal();
    },
    [handleDelete, refetch, closeModal]
  );

  return { confirmDelete };
};

export default useConfirmSalaryDelete;
