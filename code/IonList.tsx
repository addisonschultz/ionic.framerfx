import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonList = props => {
  return <System.IonList {...props}></System.IonList>;
};

export const IonList = withHOC(InnerIonList);

IonList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonList, {
  inset: {
    title: "Inset",
    type: ControlType.Boolean
  },
  lines: {
    title: "Lines",
    type: ControlType.Enum,
    options: ["none", "full", "inset"],
    optionTitles: ["none", "full", "inset"]
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
