import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonSkeletonText = props => {
  return <System.IonSkeletonText {...props}></System.IonSkeletonText>;
};

export const IonSkeletonText = withHOC(InnerIonSkeletonText);

IonSkeletonText.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonSkeletonText, {
  animated: {
    title: "Animated",
    type: ControlType.Boolean
  },
  width: {
    title: "Width",
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
