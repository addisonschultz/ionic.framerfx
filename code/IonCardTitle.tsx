import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonCardTitle = props => {
  return <System.IonCardTitle {...props}></System.IonCardTitle>;
};

export const IonCardTitle = withHOC(InnerIonCardTitle);

IonCardTitle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonCardTitle, {
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
