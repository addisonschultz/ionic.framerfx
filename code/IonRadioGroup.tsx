import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonRadioGroup = props => {
  return <System.IonRadioGroup {...props}></System.IonRadioGroup>;
};

export const IonRadioGroup = withHOC(InnerIonRadioGroup);

IonRadioGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonRadioGroup, {
  allowEmptySelection: {
    title: "Allow empty selection",
    type: ControlType.Boolean
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
