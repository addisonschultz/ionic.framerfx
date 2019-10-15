import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonRippleEffect = props => {
  return <System.IonRippleEffect {...props}></System.IonRippleEffect>;
};

export const IonRippleEffect = withHOC(InnerIonRippleEffect);

IonRippleEffect.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonRippleEffect, {
  type: {
    title: "Type",
    type: ControlType.Enum,
    options: ["bounded", "unbounded"],
    optionTitles: ["bounded", "unbounded"]
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
