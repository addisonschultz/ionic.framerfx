import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonItem = props => {
  return <System.IonItem {...props}></System.IonItem>;
};

export const IonItem = withHOC(InnerIonItem);

IonItem.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonItem, {
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
  download: {
    title: "Download",
    type: ControlType.String
  },
  type: {
    title: "Type",
    type: ControlType.Enum,
    options: ["submit", "reset", "button"],
    optionTitles: ["submit", "reset", "button"]
  },
  button: {
    title: "Button",
    type: ControlType.Boolean
  },
  lines: {
    title: "Lines",
    type: ControlType.Enum,
    options: ["none", "full", "inset"],
    optionTitles: ["none", "full", "inset"]
  },
  detail: {
    title: "Detail",
    type: ControlType.Boolean
  },
  detailIcon: {
    title: "Detail icon",
    type: ControlType.String
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
