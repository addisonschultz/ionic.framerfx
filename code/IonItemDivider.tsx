import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonItemDivider = props => {
  return <System.IonItemDivider {...props}></System.IonItemDivider>;
};

export const IonItemDivider = withHOC(InnerIonItemDivider);

IonItemDivider.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonItemDivider, {
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
  sticky: {
    title: "Sticky",
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
