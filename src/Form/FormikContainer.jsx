import React from "react";
import { Formik, Form } from "formik";

import { useDispatch, useSelector } from "react-redux";
import "../style/ContactUs.scss";
import { submitValue } from "../redux/action/searchUserAction";
import FormController from "./FormController";
import Button from "../component/Button";

function FormikContainer() {
  const cru = useSelector((state) => state);
  const dispatch = useDispatch();
  const checkBoxOptions = [
    { key: "1", value: "Apply to all items in collection", Notcheckall: true },
    { key: "2", value: "Apply to specific items", Notcheckall: false },
  ];
  return (
    <Formik
      initialValues={{
        addTax: "",
        percentage: "",
      }}
      onSubmit={(values) => {
        dispatch(submitValue(values));
      }}
    >
      {(formik) => (
        <section id="formikContainer">
          <Form>
            <div className="row my-2">
              <div className="col-md-6 col-sm-12 ">
                <FormController name="addTax" type="text" />
              </div>
              <div className="col-md-3 col-6 my-md-0 my-2">
                <FormController name="percentage" type="number" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <FormController
                  type="checkbox"
                  name="checkBoxOptions"
                  options={checkBoxOptions}
                />
              </div>
            </div>
            <div className="my-5 py-5">
              <hr />
              {cru.searchUser && cru.searchUser.applicable_items ? (
                <Button
                  btnText={`Add tax to ${cru.searchUser.applicable_items.length} items`}
                />
              ) : (
                <Button btnText={`Add tax to items`} />
              )}
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
}

export default FormikContainer;
