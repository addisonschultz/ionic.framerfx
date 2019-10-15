import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonRadio = props => {
  return <System.IonRadio {...props}></System.IonRadio>;
};

export const IonRadio = withHOC(InnerIonRadio);

IonRadio.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonRadio, {
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
