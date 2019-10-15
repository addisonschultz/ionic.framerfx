import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonSlides = props => {
  return <System.IonSlides {...props}></System.IonSlides>;
};

export const IonSlides = withHOC(InnerIonSlides);

IonSlides.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonSlides, {
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  pager: {
    title: "Pager",
    type: ControlType.Boolean
  },
  scrollbar: {
    title: "Scrollbar",
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
