import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonFabButton = props => {
  return <System.IonFabButton {...props}></System.IonFabButton>;
};

export const IonFabButton = withHOC(InnerIonFabButton);

IonFabButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonFabButton, {
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
    type: ControlType.Array
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
  show: {
    title: "Show",
    type: ControlType.Boolean
  },
  activated: {
    title: "Activated",
    type: ControlType.Boolean
  },
  translucent: {
    title: "Translucent",
    type: ControlType.Boolean
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
