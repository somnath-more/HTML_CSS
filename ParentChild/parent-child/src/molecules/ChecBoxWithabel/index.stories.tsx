import { Meta } from "@storybook/react";
import React, { useState } from "react";
import CheckboxWithLabel from "./index";

export default {
  title: "molecules/CheckboxWithLabel",
  component: CheckboxWithLabel,
} as Meta;

export const Default = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <CheckboxWithLabel
      label="Default Checkbox"
      ischecked={checked}
      onChange={handleChange}
    />
  );
};

export const Checked = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <CheckboxWithLabel
      label="Checked Checkbox"
      ischecked={checked}
      onChange={handleChange}
    />
  );
};
