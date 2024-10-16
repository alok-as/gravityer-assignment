'use client';
import { ChevronDown } from 'lucide-react';

import { useSelect } from '@/components/ui/select/use-select';
import type {
  SelectItemProps,
  SelectProps,
} from '@/components/ui/select/select-types';

export const SelectItem = ({ label, onChange }: SelectItemProps) => (
  <li
    className="px-4 py-2 capitalize transition cursor-pointer hover:bg-gray-100"
    onClick={onChange}
  >
    {label}
  </li>
);

export const Select = ({
  placeholder = 'Select',
  options,
  value,
  onChange,
}: SelectProps) => {
  const { ref, isOpen, onOpen, onChangeHandler } = useSelect(onChange);

  return (
    <div className="relative select-none">
      <div
        className="flex items-center justify-between px-4 py-2 bg-white border border-gray-100 rounded-md cursor-pointer"
        onClick={onOpen}
      >
        <span className="capitalize">{value ? value.label : placeholder}</span>

        <ChevronDown
          size={18}
          className={`transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <div
        className="absolute left-0 z-10 w-full mt-1 rounded-md top-100"
        ref={ref}
      >
        {isOpen && (
          <ul className="flex flex-col overflow-y-auto bg-white max-h-64">
            {options.map((option) => (
              <SelectItem
                key={option.value}
                label={option.label}
                onChange={() => onChangeHandler(option)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
