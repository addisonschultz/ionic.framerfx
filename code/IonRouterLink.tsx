import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonRouterLink = props => {
  return <System.IonRouterLink {...props}></System.IonRouterLink>;
};

export const IonRouterLink = withHOC(InnerIonRouterLink);

IonRouterLink.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonRouterLink, {
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  href: {
    title: "Href",
    type: ControlType.String,
    defaultValue: "https://framer.com"
  },
  rel: {
    title: "Rel",
    type: ControlType.String
  },
  target: {
    title: "Target",
    type: ControlType.String
  },
  routerLink: {
    title: "Router link",
    type: ControlType.String
  },
  routerDirection: {
    title: "Router direction",
    type: ControlType.Enum,
    options: ["none", "forward", "back"],
    optionTitles: ["none", "forward", "back"]
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
