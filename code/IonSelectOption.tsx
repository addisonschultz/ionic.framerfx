import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonSelectOption = props => {
  return <System.IonSelectOption {...props}></System.IonSelectOption>;
};

export const IonSelectOption = withHOC(InnerIonSelectOption);

IonSelectOption.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonSelectOption, {
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  selected: {
    title: "Selected",
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
