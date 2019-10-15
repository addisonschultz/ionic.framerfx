import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonMenu = props => {
  return <System.IonMenu {...props}></System.IonMenu>;
};

export const IonMenu = withHOC(InnerIonMenu);

IonMenu.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonMenu, {
  contentId: {
    title: "Content id",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  maxEdgeStart: {
    title: "Max edge start",
    type: ControlType.Number
  },
  menuId: {
    title: "Menu id",
    type: ControlType.String
  },
  side: {
    title: "Side",
    type: ControlType.Enum,
    options: ["start", "end"],
    optionTitles: ["start", "end"]
  },
  swipeGesture: {
    title: "Swipe gesture",
    type: ControlType.Boolean
  },
  type: {
    title: "Type",
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
