import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonCheckbox = props => {
  return <System.IonCheckbox {...props}></System.IonCheckbox>;
};

export const IonCheckbox = withHOC(InnerIonCheckbox);

IonCheckbox.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonCheckbox, {
  checked: {
    title: "Checked",
    type: ControlType.Boolean
  },
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  indeterminate: {
    title: "Indeterminate",
    type: ControlType.Boolean
  },
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  name: {
    title: "Name",
    type: ControlType.String
  },
  value: {
    title: "Value",
    type: ControlType.String
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
