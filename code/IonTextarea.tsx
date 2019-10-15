import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonTextarea = props => {
  return <System.IonTextarea {...props}></System.IonTextarea>;
};

export const IonTextarea = withHOC(InnerIonTextarea);

IonTextarea.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonTextarea, {
  autoGrow: {
    title: "Auto grow",
    type: ControlType.Boolean
  },
  autocapitalize: {
    title: "Autocapitalize",
    type: ControlType.String
  },
  autofocus: {
    title: "Autofocus",
    type: ControlType.Boolean
  },
  clearOnEdit: {
    title: "Clear on edit",
    type: ControlType.Boolean
  },
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  cols: {
    title: "Cols",
    type: ControlType.Number
  },
  debounce: {
    title: "Debounce",
    type: ControlType.Number
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  maxlength: {
    title: "Maxlength",
    type: ControlType.Number
  },
  minlength: {
    title: "Minlength",
    type: ControlType.Number
  },
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  name: {
    title: "Name",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  readonly: {
    title: "Readonly",
    type: ControlType.Boolean
  },
  required: {
    title: "Required",
    type: ControlType.Boolean
  },
  rows: {
    title: "Rows",
    type: ControlType.Number
  },
  spellcheck: {
    title: "Spellcheck",
    type: ControlType.Boolean
  },
  value: {
    title: "Value",
    type: ControlType.String
  },
  wrap: {
    title: "Wrap",
    type: ControlType.Enum,
    options: ["off", "hard", "soft"],
    optionTitles: ["off", "hard", "soft"]
  },
  class: {
    title: "Class",
    type: ControlType.String
  }
});
