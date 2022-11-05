import React from "react";

import { useField } from "formik";
import "../style/TextField.scss";
function Text({ data }) {

  const [field] = useField(data);

  return (
    <>
      <div className="">
        <input
          autoComplete="off"
          {...field}
          type={data.type}
          id={field.name}
          className="form-control text-field form-control-lg"
        />
      </div>
    </>
  );
}

export default Text;
