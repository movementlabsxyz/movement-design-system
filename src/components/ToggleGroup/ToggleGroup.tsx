import { useState } from "react";
import { cn } from "../../lib/utils";

interface FilterToggleGroupProps {
  options: readonly {
    value: string;
    label: string;
  }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export default function FilterToggleGroup({
  options,
  defaultValue,
  onChange,
  value: controlledValue,
}: FilterToggleGroupProps) {
  const [internalValue, setInternalValue] = useState(
    defaultValue || options[0].value
  );

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex flex-wrap gap-6 p-1 w-fit">
      {options.map((option, index) => (
        <div
          key={option.value}
          className={cn(
            "rounded border border-white/64 flex items-center gap-2 font-body px-4 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer hover:bg-white/14",
            value === option.value &&
              "text-black bg-guild-green-300 shadow-sm hover:bg-white"
          )}
          onClick={() => handleChange(option.value)}
        >
          <img
            src={`/icons/${index}.png`}
            alt={option.label}
            className="w-4 h-4"
          />
          {option.label}
        </div>
      ))}
    </div>
  );
}
