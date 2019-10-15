import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonGrid = props => {
  return <System.IonGrid {...props}></System.IonGrid>;
};

export const IonGrid = withHOC(InnerIonGrid);

IonGrid.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonGrid, {
  fixed: {
    title: "Fixed",
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
