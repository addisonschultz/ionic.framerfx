import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonCardHeader = props => {
  return <System.IonCardHeader {...props}></System.IonCardHeader>;
};

export const IonCardHeader = withHOC(InnerIonCardHeader);

IonCardHeader.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonCardHeader, {
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
  translucent: {
    title: "Translucent",
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
