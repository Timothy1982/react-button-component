// Button.stories.js

import React from "react";
import Button from "./Button";

export default {
  title: "forms/Button",
  component: Button,
  args: {
    label: "Button",
    disabled: false,
    disableShadow: false,
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary", "danger"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["default", "text", "outline"],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Btn = Template.bind({});

export const BtnStartIcon = Template.bind({});
BtnStartIcon.args = {
  startIcon: "local_grocery_store",
};

export const BtnEndIcon = Template.bind({});
BtnEndIcon.args = {
  endIcon: "local_grocery_store",
};
