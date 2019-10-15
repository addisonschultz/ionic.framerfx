import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonItemSliding = props => {
  return <System.IonItemSliding {...props}></System.IonItemSliding>;
};

export const IonItemSliding = withHOC(InnerIonItemSliding);

IonItemSliding.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonItemSliding, {
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
