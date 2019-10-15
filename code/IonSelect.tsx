import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonSelect = props => {
  return <System.IonSelect {...props}></System.IonSelect>;
};

export const IonSelect = withHOC(InnerIonSelect);

IonSelect.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonSelect, {
  cancelText: {
    title: "Cancel text",
    type: ControlType.String,
    defaultValue: "cancelText"
  },
  compareWith: {
    title: "Compare with",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  interface: {
    title: "Interface",
    type: ControlType.Enum,
    options: ["action-sheet", "popover", "alert"],
    optionTitles: ["action sheet", "popover", "alert"]
  },
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  multiple: {
    title: "Multiple",
    type: ControlType.Boolean
  },
  name: {
    title: "Name",
    type: ControlType.String
  },
  okText: {
    title: "Ok text",
    type: ControlType.String,
    defaultValue: "okText"
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  selectedText: {
    title: "Selected text",
    type: ControlType.String,
    defaultValue: "selectedText"
  },
  class: {
    title: "Class",
    type: ControlType.String
  }
});
