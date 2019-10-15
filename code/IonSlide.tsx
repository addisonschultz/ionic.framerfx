import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonSlide = props => {
  return <System.IonSlide {...props}></System.IonSlide>;
};

export const IonSlide = withHOC(InnerIonSlide);

IonSlide.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonSlide, {
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
