import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonDatetime = props => {
  return <System.IonDatetime {...props}></System.IonDatetime>;
};

export const IonDatetime = withHOC(InnerIonDatetime);

IonDatetime.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonDatetime, {
  cancelText: {
    title: "Cancel text",
    type: ControlType.String,
    defaultValue: "cancelText"
  },
  dayNames: {
    title: "Day names",
    type: ControlType.Array
  },
  dayShortNames: {
    title: "Day short names",
    type: ControlType.Array
  },
  dayValues: {
    title: "Day values",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean
  },
  displayFormat: {
    title: "Display format",
    type: ControlType.String
  },
  doneText: {
    title: "Done text",
    type: ControlType.String,
    defaultValue: "doneText"
  },
  hourValues: {
    title: "Hour values",
    type: ControlType.String
  },
  max: {
    title: "Max",
    type: ControlType.String
  },
  min: {
    title: "Min",
    type: ControlType.String
  },
  minuteValues: {
    title: "Minute values",
    type: ControlType.String
  },
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  monthNames: {
    title: "Month names",
    type: ControlType.Array
  },
  monthShortNames: {
    title: "Month short names",
    type: ControlType.Array
  },
  monthValues: {
    title: "Month values",
    type: ControlType.String
  },
  name: {
    title: "Name",
    type: ControlType.String
  },
  pickerFormat: {
    title: "Picker format",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  readonly: {
    title: "Readonly",
    type: ControlType.Boolean
  },
  value: {
    title: "Value",
    type: ControlType.String
  },
  yearValues: {
    title: "Year values",
    type: ControlType.String
  },
  class: {
    title: "Class",
    type: ControlType.String
  }
});
