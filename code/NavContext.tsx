import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerNavContext = props => {
  return <System.NavContext {...props}></System.NavContext>;
};

export const NavContext = withHOC(InnerNavContext);

NavContext.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NavContext, {
  currentPath: {
    title: "Current path",
    type: ControlType.String
  }
});
