import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonMenuToggle = props => {
  return <System.IonMenuToggle {...props}></System.IonMenuToggle>;
};

export const IonMenuToggle = withHOC(InnerIonMenuToggle);

IonMenuToggle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonMenuToggle, {
  autoHide: {
    title: "Auto hide",
    type: ControlType.Boolean
  },
  menu: {
    title: "Menu",
    type: ControlType.String
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
