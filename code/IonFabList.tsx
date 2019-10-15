import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonFabList = props => {
  return <System.IonFabList {...props}></System.IonFabList>;
};

export const IonFabList = withHOC(InnerIonFabList);

IonFabList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonFabList, {
  activated: {
    title: "Activated",
    type: ControlType.Boolean
  },
  side: {
    title: "Side",
    type: ControlType.Enum,
    options: ["bottom", "top", "start", "end"],
    optionTitles: ["bottom", "top", "start", "end"]
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
