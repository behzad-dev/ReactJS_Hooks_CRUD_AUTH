import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DataForm from "./reusable/DataForm";
import { Fetch_Data, Update_Data } from "../actions";
import { connect, useDispatch } from "react-redux";
function DataUpdate(props) {
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    dispatch(Fetch_Data(state));
  }, []);

  const handleCallback = (childData) => {
    dispatch(
      Update_Data(state, childData.Name, childData.Family, childData.Age)
    );
  };
  return (
    <div>
      {" "}
      <DataForm
        formData={props.selectedOne}
        formId={state}
        myCallBack={handleCallback}
        Name="updateForm"
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return { selectedOne: state.myData.CurrentSelectedData };
};
export default connect(mapStateToProps, { Fetch_Data })(DataUpdate);
