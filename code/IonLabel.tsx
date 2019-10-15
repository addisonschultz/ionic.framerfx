import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonLabel = props => {
  return <System.IonLabel {...props}></System.IonLabel>;
};

export const IonLabel = withHOC(InnerIonLabel);

IonLabel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonLabel, {
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  position: {
    title: "Position",
    type: ControlType.Enum,
    options: ["fixed", "stacked", "floating"],
    optionTitles: ["fixed", "stacked", "floating"]
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
