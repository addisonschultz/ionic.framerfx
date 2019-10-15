import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonButtons = props => {
  return <System.IonButtons {...props}></System.IonButtons>;
};

export const IonButtons = withHOC(InnerIonButtons);

IonButtons.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonButtons, {
  collapse: {
    title: "Collapse",
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
