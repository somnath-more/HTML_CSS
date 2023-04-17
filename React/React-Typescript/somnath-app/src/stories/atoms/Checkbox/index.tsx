import React, { useState } from "react";

export interface CheckboxProps {
  label?: string;
  isChecked?: boolean;
  onChange: (isChecked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  isChecked,
  onChange,
}) => {
  const [checked, setChecked] = useState(isChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    onChange(isChecked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
