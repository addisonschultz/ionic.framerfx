import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonInput = props => {
  return <System.IonInput {...props}></System.IonInput>;
};

export const IonInput = withHOC(InnerIonInput);

IonInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonInput, {
  accept: {
    title: "Accept",
    type: ControlType.String
  },
  autocapitalize: {
    title: "Autocapitalize",
    type: ControlType.String
  },
  autocomplete: {
    title: "Autocomplete",
    type: ControlType.Enum,
    options: ["on", "off"],
    optionTitles: ["on", "off"]
  },
  autocorrect: {
    title: "Autocorrect",
    type: ControlType.Enum,
    options: ["on", "off"],
    optionTitles: ["on", "off"]
  },
  autofocus: {
    title: "Autofocus",
    type: ControlType.Boolean
  },
  clearInput: {
    title: "Clear input",
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
  debounce: {
    title: "Debounce",
    type: ControlType.Number
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  inputmode: {
    title: "Inputmode",
    type: ControlType.Enum,
    options: [
      "none",
      "text",
      "tel",
      "url",
      "email",
      "numeric",
      "decimal",
      "search"
    ],
    optionTitles: [
      "none",
      "text",
      "tel",
      "url",
      "email",
      "numeric",
      "decimal",
      "search"
    ]
  },
  max: {
    title: "Max",
    type: ControlType.String
  },
  maxlength: {
    title: "Maxlength",
    type: ControlType.Number
  },
  min: {
    title: "Min",
    type: ControlType.String
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
  multiple: {
    title: "Multiple",
    type: ControlType.Boolean
  },
  name: {
    title: "Name",
    type: ControlType.String
  },
  pattern: {
    title: "Pattern",
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
  size: {
    title: "Size",
    type: ControlType.Number
  },
  spellcheck: {
    title: "Spellcheck",
    type: ControlType.Boolean
  },
  step: {
    title: "Step",
    type: ControlType.String
  },
  type: {
    title: "Type",
    type: ControlType.Enum,
    options: [
      "number",
      "date",
      "time",
      "text",
      "tel",
      "url",
      "email",
      "search",
      "password"
    ],
    optionTitles: [
      "number",
      "date",
      "time",
      "text",
      "tel",
      "url",
      "email",
      "search",
      "password"
    ]
  },
  value: {
    title: "Value",
    type: ControlType.String
  },
  class: {
    title: "Class",
    type: ControlType.String
  }
});
