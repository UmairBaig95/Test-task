import React from "react";
import { useField } from "formik";
import "../style/TextField.scss";
import Icons from "../svg/Icons";
function Text({ data }) {
  const [field] = useField(data);
  return (
    <>
      <div className="form-outline forms-text-field position-relative">
        <input
          autoComplete="off"
          {...field}
          type={data.type}
          id={field.name}
          className="form-control text-field form-control-lg"
        />
        <span className="percentage-svg">
          <Icons name="percentage" size="20" />
        </span>
      </div>
    </>
  );
}

export default Text;
