import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonRange = props => {
  return <System.IonRange {...props}></System.IonRange>;
};

export const IonRange = withHOC(InnerIonRange);

IonRange.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonRange, {
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  debounce: {
    title: "Debounce",
    type: ControlType.Number
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  dualKnobs: {
    title: "Dual knobs",
    type: ControlType.Boolean
  },
  max: {
    title: "Max",
    type: ControlType.Number
  },
  min: {
    title: "Min",
    type: ControlType.Number
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
  pin: {
    title: "Pin",
    type: ControlType.Boolean
  },
  snaps: {
    title: "Snaps",
    type: ControlType.Boolean
  },
  step: {
    title: "Step",
    type: ControlType.Number
  },
  ticks: {
    title: "Ticks",
    type: ControlType.Boolean
  },
  value: {
    title: "Value",
    type: ControlType.Number
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
