

import React from "react";
import Checkbox from ".";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
};

export const ThePrivacyPolicy = () => (
  <Checkbox
    label="I agree to the Privacy Policy"
    isChecked={false}
    onChange={(isChecked) =>
      console.log(
        `Unchecked checkbox is now ${isChecked ? "checked" : "unchecked"}`
      )
    }
  />
);

export const RememberMe = () => (
  <Checkbox
    label="Remember Me"
    isChecked={true}
    onChange={(isChecked) =>
      console.log(
        `Checked checkbox is now ${isChecked ? "checked" : "unchecked"}`
      )
    }
  />
);
