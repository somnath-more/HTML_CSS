import React from "react";

import Typography from "../../atoms/Typography";

interface CheckboxWithLabelProps {
  label?: string;
  ischecked?: boolean;
  onChange: (ischecked: boolean) => void;
}

export const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  label,
  ischecked,
  onChange,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Checkbox isChecked={ischecked} onChange={onChange} />

      <Typography variant="body">Remember me</Typography>
    </div>
  );
};

export default CheckboxWithLabel;
