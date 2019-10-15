import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonItemOptions = props => {
  return <System.IonItemOptions {...props}></System.IonItemOptions>;
};

export const IonItemOptions = withHOC(InnerIonItemOptions);

IonItemOptions.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonItemOptions, {
  side: {
    title: "Side",
    type: ControlType.Enum,
    options: ["start", "end"],
    optionTitles: ["start", "end"]
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
