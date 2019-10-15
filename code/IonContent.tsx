import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonContent = props => {
  return <System.IonContent {...props}></System.IonContent>;
};

export const IonContent = withHOC(InnerIonContent);

IonContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonContent, {
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  forceOverscroll: {
    title: "Force overscroll",
    type: ControlType.Boolean
  },
  fullscreen: {
    title: "Fullscreen",
    type: ControlType.Boolean
  },
  scrollEvents: {
    title: "Scroll events",
    type: ControlType.Boolean
  },
  scrollX: {
    title: "Scroll x",
    type: ControlType.Boolean
  },
  scrollY: {
    title: "Scroll y",
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
