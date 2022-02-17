import React, { useState, useEffect } from "react";
import { Create_Data } from "../actions";
import { connect, useDispatch } from "react-redux";
import DataForm from "./reusable/DataForm";
import { useNavigate } from "react-router-dom";

function DataCreate() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/Create");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);
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
