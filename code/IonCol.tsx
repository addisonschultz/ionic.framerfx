import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonCol = props => {
  return <System.IonCol {...props}></System.IonCol>;
};

export const IonCol = withHOC(InnerIonCol);

IonCol.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonCol, {
  offset: {
    title: "Offset",
    type: ControlType.String
  },
  offsetLg: {
    title: "Offset lg",
    type: ControlType.String
  },
  offsetMd: {
    title: "Offset md",
    type: ControlType.String
  },
  offsetSm: {
    title: "Offset sm",
    type: ControlType.String
  },
  offsetXl: {
    title: "Offset xl",
    type: ControlType.String
  },
  offsetXs: {
    title: "Offset xs",
    type: ControlType.String
  },
  pull: {
    title: "Pull",
    type: ControlType.String
  },
  pullLg: {
    title: "Pull lg",
    type: ControlType.String
  },
  pullMd: {
    title: "Pull md",
    type: ControlType.String
  },
  pullSm: {
    title: "Pull sm",
    type: ControlType.String
  },
  pullXl: {
    title: "Pull xl",
    type: ControlType.String
  },
  pullXs: {
    title: "Pull xs",
    type: ControlType.String
  },
  push: {
    title: "Push",
    type: ControlType.String
  },
  pushLg: {
    title: "Push lg",
    type: ControlType.String
  },
  pushMd: {
    title: "Push md",
    type: ControlType.String
  },
  pushSm: {
    title: "Push sm",
    type: ControlType.String
  },
  pushXl: {
    title: "Push xl",
    type: ControlType.String
  },
  pushXs: {
    title: "Push xs",
    type: ControlType.String
  },
  size: {
    title: "Size",
    type: ControlType.String
  },
  sizeLg: {
    title: "Size lg",
    type: ControlType.String
  },
  sizeMd: {
    title: "Size md",
    type: ControlType.String
  },
  sizeSm: {
    title: "Size sm",
    type: ControlType.String
  },
  sizeXl: {
    title: "Size xl",
    type: ControlType.String
  },
  sizeXs: {
    title: "Size xs",
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
