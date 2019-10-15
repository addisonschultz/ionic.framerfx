import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonProgressBar = props => {
  return <System.IonProgressBar {...props}></System.IonProgressBar>;
};

export const IonProgressBar = withHOC(InnerIonProgressBar);

IonProgressBar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonProgressBar, {
  buffer: {
    title: "Buffer",
    type: ControlType.Number
  },
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
  reversed: {
    title: "Reversed",
    type: ControlType.Boolean
  },
  type: {
    title: "Type",
    type: ControlType.Enum,
    options: ["determinate", "indeterminate"],
    optionTitles: ["determinate", "indeterminate"]
  },
  value: {
    title: "Value",
    type: ControlType.Number
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
