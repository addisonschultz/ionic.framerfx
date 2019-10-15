import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonReorderGroup = props => {
  return <System.IonReorderGroup {...props}></System.IonReorderGroup>;
};

export const IonReorderGroup = withHOC(InnerIonReorderGroup);

IonReorderGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonReorderGroup, {
  disabled: {
    title: "Disabled",
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
