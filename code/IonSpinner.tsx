import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonSpinner = props => {
  return <System.IonSpinner {...props}></System.IonSpinner>;
};

export const IonSpinner = withHOC(InnerIonSpinner);

IonSpinner.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonSpinner, {
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  duration: {
    title: "Duration",
    type: ControlType.Number
  },
  name: {
    title: "Name",
    type: ControlType.Enum,
    options: [
      "bubbles",
      "circles",
      "circular",
      "crescent",
      "dots",
      "lines",
      "lines-small"
    ],
    optionTitles: [
      "bubbles",
      "circles",
      "circular",
      "crescent",
      "dots",
      "lines",
      "lines small"
    ]
  },
  paused: {
    title: "Paused",
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
