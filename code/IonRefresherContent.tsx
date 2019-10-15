import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonRefresherContent = props => {
  return <System.IonRefresherContent {...props}></System.IonRefresherContent>;
};

export const IonRefresherContent = withHOC(InnerIonRefresherContent);

IonRefresherContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonRefresherContent, {
  pullingIcon: {
    title: "Pulling icon",
    type: ControlType.String
  },
  pullingText: {
    title: "Pulling text",
    type: ControlType.String,
    defaultValue: "pullingText"
  },
  refreshingSpinner: {
    title: "Refreshing spinner",
    type: ControlType.Enum,
    options: [
      "bubbles",
      "circles",
      "circular",
      "crescent",
      "dots",
      "lines",
      "lines-small"
    ],
    optionTitles: [
      "bubbles",
      "circles",
      "circular",
      "crescent",
      "dots",
      "lines",
      "lines small"
    ]
  },
  refreshingText: {
    title: "Refreshing text",
    type: ControlType.String,
    defaultValue: "refreshingText"
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
