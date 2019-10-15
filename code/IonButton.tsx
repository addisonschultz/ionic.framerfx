import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonButton = props => {
  return <System.IonButton {...props}></System.IonButton>;
};

export const IonButton = withHOC(InnerIonButton);

IonButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonButton, {
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  size: {
    title: "Size",
    type: ControlType.Enum,
    options: ["small", "default", "large"],
    optionTitles: ["small", "default", "large"]
  },
  href: {
    title: "Href",
    type: ControlType.String,
    defaultValue: "https://framer.com"
  },
  rel: {
    title: "Rel",
    type: ControlType.String
  },
  target: {
    title: "Target",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  strong: {
    title: "Strong",
    type: ControlType.Boolean
  },
  fill: {
    title: "Fill",
    type: ControlType.Enum,
    options: ["default", "clear", "outline", "solid"],
    optionTitles: ["default", "clear", "outline", "solid"]
  },
  download: {
    title: "Download",
    type: ControlType.String
  },
  buttonType: {
    title: "Button type",
    type: ControlType.String
  },
  expand: {
    title: "Expand",
    type: ControlType.Enum,
    options: ["full", "block"],
    optionTitles: ["full", "block"]
  },
  shape: {
    title: "Shape",
    type: ControlType.Array
  },
  type: {
    title: "Type",
    type: ControlType.Enum,
    options: ["submit", "reset", "button"],
    optionTitles: ["submit", "reset", "button"]
  },
  routerLink: {
    title: "Router link",
    type: ControlType.String
  },
  routerDirection: {
    title: "Router direction",
    type: ControlType.Enum,
    options: ["none", "forward", "back"],
    optionTitles: ["none", "forward", "back"]
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
