import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonLifeCycleContext = props => {
  return <System.IonLifeCycleContext {...props}></System.IonLifeCycleContext>;
};

export const IonLifeCycleContext = withHOC(InnerIonLifeCycleContext);

IonLifeCycleContext.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonLifeCycleContext, {});
