import React from "react";
import Checkbox from "./Checkbox";
import Number from './Number'
import CoustomSelect from "./CoustomSelect";
import Text from "./Text";

function FormController(props) {
  switch (props.type) {
    case "text":
      return <Text data={props} />;
    case "number":
      return <Number data={props}/>;
    case "select":
      return <CoustomSelect data={props} />;
      case "checkbox":
      return <Checkbox data={props} />
    default:
      return null;
  }
}

export default FormController;
