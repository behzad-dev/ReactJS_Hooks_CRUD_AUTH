import { connect, useDispatch } from "react-redux";
import { Fetch_All, Delete_Data } from "../actions";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function DataList(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetch_All());
  }, []);
  const deleteHelper = (id) => {
    dispatch(Delete_Data(id));
  };
  return (
    <div>
      {/* {console.log(props.mytest2.map((doc) => doc.data()))}  */}
      {/* doc() get the data, and with doc.id we append id to them */}
      {props.AllData.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })).map((m) => (
        <div style={{ textAlign: "center" }} key={m.id}>
          <div>{m.Name}</div>
          <div> {m.Family}</div>
          <div>{m.Age}</div>
          <div style={{ backgroundColor: "khaki" }}>
            <button onClick={() => deleteHelper(m.id)}>Delete</button>
            <button
              onClick={() => {
                navigate("/Update", { state: m.id });
              }}
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { AllData: Object.values(state.myData.AllDataReducer) };
};
export default connect(mapStateToProps, { Fetch_All })(DataList);
