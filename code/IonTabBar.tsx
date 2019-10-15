import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonTabBar = props => {
  return <System.IonTabBar {...props}></System.IonTabBar>;
};

export const IonTabBar = withHOC(InnerIonTabBar);

IonTabBar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonTabBar, {
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  selectedTab: {
    title: "Selected tab",
    type: ControlType.String
  },
  translucent: {
    title: "Translucent",
    type: ControlType.Boolean
  },
  currentPath: {
    title: "Current path",
    type: ControlType.String
  },
  slot: {
    title: "Slot",
    type: ControlType.Enum,
    options: ["bottom", "top"],
    optionTitles: ["bottom", "top"]
  }
});
