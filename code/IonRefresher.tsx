import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonRefresher = props => {
  return <System.IonRefresher {...props}></System.IonRefresher>;
};

export const IonRefresher = withHOC(InnerIonRefresher);

IonRefresher.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonRefresher, {
  closeDuration: {
    title: "Close duration",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  pullFactor: {
    title: "Pull factor",
    type: ControlType.Number
  },
  pullMax: {
    title: "Pull max",
    type: ControlType.Number
  },
  pullMin: {
    title: "Pull min",
    type: ControlType.Number
  },
  snapbackDuration: {
    title: "Snapback duration",
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
