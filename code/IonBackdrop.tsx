import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonBackdrop = props => {
  return <System.IonBackdrop {...props}></System.IonBackdrop>;
};

export const IonBackdrop = withHOC(InnerIonBackdrop);

IonBackdrop.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonBackdrop, {
  stopPropagation: {
    title: "Stop propagation",
    type: ControlType.Boolean
  },
  tappable: {
    title: "Tappable",
    type: ControlType.Boolean
  },
  visible: {
    title: "Visible",
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
