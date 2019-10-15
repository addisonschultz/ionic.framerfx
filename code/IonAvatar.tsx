import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonAvatar = props => {
  return <System.IonAvatar {...props}></System.IonAvatar>;
};

export const IonAvatar = withHOC(InnerIonAvatar);

IonAvatar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonAvatar, {
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
