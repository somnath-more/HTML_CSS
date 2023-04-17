import React from "react";
import { GithubButton, GoogleButton } from "./ButtonWithIcon";

export default {
  title: "Molecules/ButtonWithIcon",
  component: GithubButton,
};

export const Github = () => <GithubButton />;

export const Google = () => <GoogleButton />;
