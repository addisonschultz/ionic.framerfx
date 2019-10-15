import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonTabButton = props => {
  return <System.IonTabButton {...props}></System.IonTabButton>;
};

export const IonTabButton = withHOC(InnerIonTabButton);

IonTabButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonTabButton, {
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  download: {
    title: "Download",
    type: ControlType.String
  },
  href: {
    title: "Href",
    type: ControlType.String,
    defaultValue: "https://framer.com"
  },
  layout: {
    title: "Layout",
    type: ControlType.Enum,
    options: [
      "icon-top",
      "icon-start",
      "icon-end",
      "icon-bottom",
      "icon-hide",
      "label-hide"
    ],
    optionTitles: [
      "icon top",
      "icon start",
      "icon end",
      "icon bottom",
      "icon hide",
      "label hide"
    ]
  },
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  rel: {
    title: "Rel",
    type: ControlType.String
  },
  selected: {
    title: "Selected",
    type: ControlType.Boolean
  },
  tab: {
    title: "Tab",
    type: ControlType.String
  },
  target: {
    title: "Target",
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
