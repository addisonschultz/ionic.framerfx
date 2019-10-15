import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonNav = props => {
  return <System.IonNav {...props}></System.IonNav>;
};

export const IonNav = withHOC(InnerIonNav);

IonNav.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonNav, {
  animated: {
    title: "Animated",
    type: ControlType.Boolean
  },
  root: {
    title: "Root",
    type: ControlType.String
  },
  swipeGesture: {
    title: "Swipe gesture",
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
