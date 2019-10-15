import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonSelectPopover = props => {
  return <System.IonSelectPopover {...props}></System.IonSelectPopover>;
};

export const IonSelectPopover = withHOC(InnerIonSelectPopover);

IonSelectPopover.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonSelectPopover, {
  header: {
    title: "Header",
    type: ControlType.String
  },
  message: {
    title: "Message",
    type: ControlType.String
  },
  subHeader: {
    title: "Sub header",
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
