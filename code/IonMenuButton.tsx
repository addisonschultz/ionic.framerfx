import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonMenuButton = props => {
  return <System.IonMenuButton {...props}></System.IonMenuButton>;
};

export const IonMenuButton = withHOC(InnerIonMenuButton);

IonMenuButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonMenuButton, {
  autoHide: {
    title: "Auto hide",
    type: ControlType.Boolean
  },
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  menu: {
    title: "Menu",
    type: ControlType.String
  },
  type: {
    title: "Type",
    type: ControlType.Enum,
    options: ["submit", "reset", "button"],
    optionTitles: ["submit", "reset", "button"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  class: {
    title: "Class",
    type: ControlType.String
  }
});
