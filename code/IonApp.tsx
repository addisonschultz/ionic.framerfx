import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonApp = props => {
  return <System.IonApp {...props}></System.IonApp>;
};

export const IonApp = withHOC(InnerIonApp);

IonApp.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonApp, {
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
