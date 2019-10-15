import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonInfiniteScrollContent = props => {
  return (
    <System.IonInfiniteScrollContent
      {...props}
    ></System.IonInfiniteScrollContent>
  );
};

export const IonInfiniteScrollContent = withHOC(InnerIonInfiniteScrollContent);

IonInfiniteScrollContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonInfiniteScrollContent, {
  loadingSpinner: {
    title: "Loading spinner",
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
  loadingText: {
    title: "Loading text",
    type: ControlType.String,
    defaultValue: "loadingText"
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
