import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonThumbnail = props => {
  return <System.IonThumbnail {...props}></System.IonThumbnail>;
};

export const IonThumbnail = withHOC(InnerIonThumbnail);

IonThumbnail.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonThumbnail, {
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
