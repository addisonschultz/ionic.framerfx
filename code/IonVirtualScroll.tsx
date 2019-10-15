import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonVirtualScroll = props => {
  return <System.IonVirtualScroll {...props}></System.IonVirtualScroll>;
};

export const IonVirtualScroll = withHOC(InnerIonVirtualScroll);

IonVirtualScroll.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonVirtualScroll, {
  approxFooterHeight: {
    title: "Approx footer height",
    type: ControlType.Number
  },
  approxHeaderHeight: {
    title: "Approx header height",
    type: ControlType.Number
  },
  approxItemHeight: {
    title: "Approx item height",
    type: ControlType.Number
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
