import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonFooter = props => {
  return <System.IonFooter {...props}></System.IonFooter>;
};

export const IonFooter = withHOC(InnerIonFooter);

IonFooter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonFooter, {
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  translucent: {
    title: "Translucent",
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
