import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonTitle = props => {
  return <System.IonTitle {...props}></System.IonTitle>;
};

export const IonTitle = withHOC(InnerIonTitle);

IonTitle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonTitle, {
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  size: {
    title: "Size",
    type: ControlType.Enum,
    options: ["small", "large"],
    optionTitles: ["small", "large"]
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
