import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonInfiniteScroll = props => {
  return <System.IonInfiniteScroll {...props}></System.IonInfiniteScroll>;
};

export const IonInfiniteScroll = withHOC(InnerIonInfiniteScroll);

IonInfiniteScroll.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonInfiniteScroll, {
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  position: {
    title: "Position",
    type: ControlType.Enum,
    options: ["bottom", "top"],
    optionTitles: ["bottom", "top"]
  },
  threshold: {
    title: "Threshold",
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
