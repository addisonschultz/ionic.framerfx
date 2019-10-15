import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonImg = props => {
  return <System.IonImg {...props}></System.IonImg>;
};

export const IonImg = withHOC(InnerIonImg);

IonImg.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonImg, {
  alt: {
    title: "Alt",
    type: ControlType.String
  },
  src: {
    title: "Src",
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
