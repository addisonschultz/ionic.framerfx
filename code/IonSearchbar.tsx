import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonSearchbar = props => {
  return <System.IonSearchbar {...props}></System.IonSearchbar>;
};

export const IonSearchbar = withHOC(InnerIonSearchbar);

IonSearchbar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonSearchbar, {
  animated: {
    title: "Animated",
    type: ControlType.Boolean
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
  cancelButtonIcon: {
    title: "Cancel button icon",
    type: ControlType.String
  },
  cancelButtonText: {
    title: "Cancel button text",
    type: ControlType.String,
    defaultValue: "cancelButtonText"
  },
  clearIcon: {
    title: "Clear icon",
    type: ControlType.String
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
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  searchIcon: {
    title: "Search icon",
    type: ControlType.String
  },
  showCancelButton: {
    title: "Show cancel button",
    type: ControlType.String
  },
  spellcheck: {
    title: "Spellcheck",
    type: ControlType.Boolean
  },
  type: {
    title: "Type",
    type: ControlType.Enum,
    options: ["number", "text", "tel", "url", "email", "search", "password"],
    optionTitles: [
      "number",
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
