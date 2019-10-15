import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonPickerColumn = props => {
  return <System.IonPickerColumn {...props}></System.IonPickerColumn>;
};

export const IonPickerColumn = withHOC(InnerIonPickerColumn);

IonPickerColumn.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonPickerColumn, {
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
