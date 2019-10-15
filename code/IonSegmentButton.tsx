import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonSegmentButton = props => {
  return <System.IonSegmentButton {...props}></System.IonSegmentButton>;
};

export const IonSegmentButton = withHOC(InnerIonSegmentButton);

IonSegmentButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonSegmentButton, {
  checked: {
    title: "Checked",
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  layout: {
    title: "Layout",
    type: ControlType.Enum,
    options: [
      "icon-top",
      "icon-start",
      "icon-end",
      "icon-bottom",
      "icon-hide",
      "label-hide"
    ],
    optionTitles: [
      "icon top",
      "icon start",
      "icon end",
      "icon bottom",
      "icon hide",
      "label hide"
    ]
  },
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  type: {
    title: "Type",
    type: ControlType.Enum,
    options: ["submit", "reset", "button"],
    optionTitles: ["submit", "reset", "button"]
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
