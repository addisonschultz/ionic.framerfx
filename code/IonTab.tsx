import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonTab = props => {
  return <System.IonTab {...props}></System.IonTab>;
};

export const IonTab = withHOC(InnerIonTab);

IonTab.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonTab, {
  component: {
    title: "Component",
    type: ControlType.String
  },
  tab: {
    title: "Tab",
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
