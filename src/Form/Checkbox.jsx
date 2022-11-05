import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sumbitResponse } from "../redux/action/searchUserAction";
import { FastField } from "formik";
import "../style/Checkbox.scss";
import { response } from "../constant/data";
var groupItemBy = function (array, property) {
  var hash = {},
    props = property.split(".");
  for (var i = 0; i < array.length; i++) {
    var key = props.reduce(function (acc, prop) {
      return acc && acc[prop];
    }, array[i]);
    if (!hash[key]) hash[key] = [];
    hash[key].push(array[i]);
  }
  return hash;
};

var grouped = groupItemBy(response, "category.name");
function Checkbox({ data }) {
  const cru = useSelector((state) => state);

  const dispatch = useDispatch();

  var dataval = {
    applied_to: "some",
    applicable_items: [],
  };
  const [chk, setChk] = useState(false);
  const { name, options } = data;
  var checkedAllData = function (e) {
    dataval= {
      applied_to: "some",
      applicable_items: [],
    };
    dispatch(sumbitResponse(dataval));
    setChk(e);
    
    if (e) {
      const data = {
        applied_to: "all",
        applicable_items: [],
      };
      response.forEach((element) => {
        data.applicable_items.push(element.id);
      }); 
      dispatch(sumbitResponse(data));
    }
  };
  const selectedData = (id) => {  
    dataval = cru.searchUser;
    if (dataval.applicable_items.length === 0) {
      dataval.applicable_items.push(id);
    } else {
      if (dataval.applicable_items.includes(id)) {
        dataval.applicable_items = dataval.applicable_items.filter((y) => {
          return y !== id;
        });
      } else {
        dataval.applicable_items.push(id);
      }
    }
    dispatch(sumbitResponse(dataval));
    console.log(dataval);
  };
  return (
    <>
      <div className="form-outline">
        <div className="coustom-checkbox position-relative mb-4">
          <FastField name={name}>
            {({ field }) => {
              return options.map((option, i) => {
                return (
                  <div className="my-2" key={option.key}>
                    <input
                      className="styled-checkbox"
                      type="radio"
                      id={option.key}
                      {...field}
                      value={option.value}
                      onChange={() => checkedAllData(option.Notcheckall)}
                    />
                    <label htmlFor={option.key}>{option.value}</label>
                  </div>
                );
              });
            }}
          </FastField>
          <hr />
          {Object.keys(grouped).map(function (key, index) {
            return (
              <>
                <div className="bg-grey px-2 py-2">
                  <input
                    type="checkbox"
                    id={index}
                    checked={chk ? "checked" : ""}
                  />
                  <label className="px-2" htmlFor="vehicle1">
                    {key}
                  </label>
                </div>
                {grouped[key].map(function (data, index) {
                  return (
                    <div className="px-4">
                      {chk ? (
                        <input
                          type="checkbox"
                          id={data.id}
                          checked={chk ? "checked" : ""}
                          onChange={() => selectedData(data.id)}
                        />
                      ) : (
                        <input
                          type="checkbox"
                          id={data.id}
                          onChange={() => selectedData(data.id)}
                        />
                      )}
                      <label className="px-2" htmlFor="vehicle1">
                        {data.name}
                      </label>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Checkbox;
