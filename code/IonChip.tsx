import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonChip = props => {
  return <System.IonChip {...props}></System.IonChip>;
};

export const IonChip = withHOC(InnerIonChip);

IonChip.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonChip, {
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
  outline: {
    title: "Outline",
    type: ControlType.Boolean
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
