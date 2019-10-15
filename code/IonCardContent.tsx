import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonCardContent = props => {
  return <System.IonCardContent {...props}></System.IonCardContent>;
};

export const IonCardContent = withHOC(InnerIonCardContent);

IonCardContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonCardContent, {
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
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
