import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonItemGroup = props => {
  return <System.IonItemGroup {...props}></System.IonItemGroup>;
};

export const IonItemGroup = withHOC(InnerIonItemGroup);

IonItemGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonItemGroup, {
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
