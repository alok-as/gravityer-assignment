import { useState } from 'react';
import { useDetectOutsideClick } from '@/hooks/useDetectOutsideClick';
import type { TSelectOption } from '@/types/common';

export const useSelect = (onChange: (options: TSelectOption) => void) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref } = useDetectOutsideClick(() => setIsOpen(false));

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const onChangeHandler = (option: TSelectOption) => {
    onChange(option);
    onClose();
  };

  return { ref, isOpen, onOpen, onChangeHandler };
};
