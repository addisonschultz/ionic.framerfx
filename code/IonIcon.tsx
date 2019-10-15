import * as React from "react";
import * as System from "@ionic/react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const InnerIonIcon = props => {
  return <System.IonIcon {...props}></System.IonIcon>;
};

export const IonIcon = withHOC(InnerIonIcon);

IonIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IonIcon, {
  ios: {
    title: "Ios",
    type: ControlType.String
  },
  md: {
    title: "Md",
    type: ControlType.String
  },
  accessKey: {
    title: "Access key",
    type: ControlType.String
  },
  contentEditable: {
    title: "Content editable",
    type: ControlType.Boolean
  },
  contextMenu: {
    title: "Context menu",
    type: ControlType.String,
    defaultValue: "contextMenu"
  },
  dir: {
    title: "Dir",
    type: ControlType.String
  },
  draggable: {
    title: "Draggable",
    type: ControlType.Boolean
  },
  hidden: {
    title: "Hidden",
    type: ControlType.Boolean
  },
  lang: {
    title: "Lang",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  slot: {
    title: "Slot",
    type: ControlType.String
  },
  spellCheck: {
    title: "Spell check",
    type: ControlType.Boolean
  },
  tabIndex: {
    title: "Tab index",
    type: ControlType.Number
  },
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "title"
  },
  inputMode: {
    title: "Input mode",
    type: ControlType.String
  },
  is: {
    title: "Is",
    type: ControlType.String
  },
  radioGroup: {
    title: "Radio group",
    type: ControlType.String
  },
  role: {
    title: "Role",
    type: ControlType.String
  },
  about: {
    title: "About",
    type: ControlType.String
  },
  datatype: {
    title: "Datatype",
    type: ControlType.String
  },
  prefix: {
    title: "Prefix",
    type: ControlType.String
  },
  property: {
    title: "Property",
    type: ControlType.String
  },
  resource: {
    title: "Resource",
    type: ControlType.String
  },
  typeof: {
    title: "Typeof",
    type: ControlType.String
  },
  vocab: {
    title: "Vocab",
    type: ControlType.String
  },
  autoCapitalize: {
    title: "Auto capitalize",
    type: ControlType.String
  },
  autoCorrect: {
    title: "Auto correct",
    type: ControlType.String
  },
  autoSave: {
    title: "Auto save",
    type: ControlType.String
  },
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#09F"
  },
  itemProp: {
    title: "Item prop",
    type: ControlType.String
  },
  itemScope: {
    title: "Item scope",
    type: ControlType.Boolean
  },
  itemType: {
    title: "Item type",
    type: ControlType.String
  },
  itemID: {
    title: "Item id",
    type: ControlType.String
  },
  itemRef: {
    title: "Item ref",
    type: ControlType.String
  },
  results: {
    title: "Results",
    type: ControlType.Number
  },
  security: {
    title: "Security",
    type: ControlType.String
  },
  unselectable: {
    title: "Unselectable",
    type: ControlType.Enum,
    options: ["on", "off"],
    optionTitles: ["on", "off"]
  },
  mode: {
    title: "Mode",
    type: ControlType.Enum,
    options: ["ios", "md"],
    optionTitles: ["ios", "md"]
  },
  class: {
    title: "Class",
    type: ControlType.String
  },
  contextmenu: {
    title: "Contextmenu",
    type: ControlType.String,
    defaultValue: "contextmenu"
  },
  size: {
    title: "Size",
    type: ControlType.String
  },
  lazy: {
    title: "Lazy",
    type: ControlType.Boolean
  },
  name: {
    title: "Name",
    type: ControlType.String
  },
  autocapitalize: {
    title: "Autocapitalize",
    type: ControlType.String
  },
  spellcheck: {
    title: "Spellcheck",
    type: ControlType.String
  },
  innerHTML: {
    title: "Inner html",
    type: ControlType.String
  },
  flipRtl: {
    title: "Flip rtl",
    type: ControlType.Boolean
  },
  src: {
    title: "Src",
    type: ControlType.String
  },
  contenteditable: {
    title: "Contenteditable",
    type: ControlType.String
  },
  tabindex: {
    title: "Tabindex",
    type: ControlType.String
  },
  inputmode: {
    title: "Inputmode",
    type: ControlType.String
  },
  radiogroup: {
    title: "Radiogroup",
    type: ControlType.String
  },
  part: {
    title: "Part",
    type: ControlType.String
  },
  autocorrect: {
    title: "Autocorrect",
    type: ControlType.String
  },
  autosave: {
    title: "Autosave",
    type: ControlType.String
  },
  itemprop: {
    title: "Itemprop",
    type: ControlType.String
  },
  itemscope: {
    title: "Itemscope",
    type: ControlType.Boolean
  },
  itemtype: {
    title: "Itemtype",
    type: ControlType.String
  },
  itemid: {
    title: "Itemid",
    type: ControlType.String
  },
  itemref: {
    title: "Itemref",
    type: ControlType.String
  }
});
