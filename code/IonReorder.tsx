import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonReorder = props => {
  return <System.IonReorder {...props}></System.IonReorder>;
};

export const IonReorder = withHOC(InnerIonReorder);

IonReorder.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonReorder, {
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
