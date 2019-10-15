import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonRouterOutlet = props => {
  return <System.IonRouterOutlet {...props}></System.IonRouterOutlet>;
};

export const IonRouterOutlet = withHOC(InnerIonRouterOutlet);

IonRouterOutlet.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonRouterOutlet, {
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  animated: {
    title: "Animated",
    type: ControlType.Boolean
  },
  class: {
    title: "Class",
    type: ControlType.String
  }
});
