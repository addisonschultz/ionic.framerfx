import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonRow = props => {
  return <System.IonRow {...props}></System.IonRow>;
};

export const IonRow = withHOC(InnerIonRow);

IonRow.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonRow, {
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
