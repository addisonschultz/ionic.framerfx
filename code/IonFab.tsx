import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonFab = props => {
  return <System.IonFab {...props}></System.IonFab>;
};

export const IonFab = withHOC(InnerIonFab);

IonFab.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonFab, {
  activated: {
    title: "Activated",
    type: ControlType.Boolean
  },
  edge: {
    title: "Edge",
    type: ControlType.Boolean
  },
  horizontal: {
    title: "Horizontal",
    type: ControlType.Enum,
    options: ["start", "end", "center"],
    optionTitles: ["start", "end", "center"]
  },
  vertical: {
    title: "Vertical",
    type: ControlType.Enum,
    options: ["bottom", "top", "center"],
    optionTitles: ["bottom", "top", "center"]
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
