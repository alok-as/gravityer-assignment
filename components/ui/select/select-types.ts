import { TSelectOption } from '@/types/common';

export type SelectItemProps = {
  label: string;
  onChange: () => void;
};

export type SelectProps = {
  placeholder?: string;
  options: TSelectOption[];
  value: TSelectOption | null;
  onChange: (option: TSelectOption) => void;
};
