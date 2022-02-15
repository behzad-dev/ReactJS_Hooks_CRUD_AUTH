import React, { useState } from "react";
import { Create_Data } from "../actions";
import { connect, useDispatch } from "react-redux";
import DataForm from "./reusable/DataForm";

function DataCreate() {
  const handleCallback = (childData) => {
    dispatch(Create_Data(childData.Name, childData.Family, childData.Age));
  };
  const dispatch = useDispatch();

  const [CreateData, setCreateData] = useState("");
  return (
    <div>
      <DataForm myCallBack={handleCallback} Name="createForm" />
    </div>
  );
}

export default connect("", { Create_Data })(DataCreate);
