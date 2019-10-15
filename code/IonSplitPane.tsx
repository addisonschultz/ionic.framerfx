import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonSplitPane = props => {
  return <System.IonSplitPane {...props}></System.IonSplitPane>;
};

export const IonSplitPane = withHOC(InnerIonSplitPane);

IonSplitPane.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonSplitPane, {
  contentId: {
    title: "Content id",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  when: {
    title: "When",
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
