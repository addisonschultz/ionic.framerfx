import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonSegment = props => {
  return <System.IonSegment {...props}></System.IonSegment>;
};

export const IonSegment = withHOC(InnerIonSegment);

IonSegment.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonSegment, {
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
  scrollable: {
    title: "Scrollable",
    type: ControlType.Boolean
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
