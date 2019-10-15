import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonHeader = props => {
  return <System.IonHeader {...props}></System.IonHeader>;
};

export const IonHeader = withHOC(InnerIonHeader);

IonHeader.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonHeader, {
  collapse: {
    title: "Collapse",
    type: ControlType.Array
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
