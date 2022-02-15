import { useState, useEffect } from "react";
export default function DataForm(props) {
  const [Name, SetName] = useState("");
  const [Family, SetFamily] = useState("");
  const [Age, SetAge] = useState("");
  const [FormData, SetFormData] = useState({});
  const [Id, SetId] = useState({});
  const onSubmit = () => {
    props.myCallBack({ Name, Family, Age, Id });
  };

  useEffect(() => {
    if (props.Name === "createForm") {
      SetFormData({
        State: props.Name,
        Title: "Create-Form",
        buttonText: "Save",
      });
    } else if (props.Name === "updateForm") {
      SetFormData({
        State: props.Name,
        Title: "Update-Form",
        buttonText: "Update",
      });
      if (props.formData) {
        SetName(props.formData.Name);
        SetFamily(props.formData.Family);
        SetAge(props.formData.Age);
        SetId(props.formId);
      }
    }
  }, [props.formData]);
  return (
    <div>
      <div style={{ backgroundColor: "cyan", textAlign: "center" }}>
        {" "}
        <h3>{FormData.Title}</h3>
        <div>
          {" "}
          <span>Name</span>{" "}
          <input
            value={Name}
            onChange={(e) => SetName(e.target.value)}
            placeholder="Enter your Name"
          ></input>
        </div>
        <div>
          <span>Family</span>{" "}
          <input
            value={Family}
            onChange={(e) => SetFamily(e.target.value)}
            placeholder="Family name"
          ></input>
        </div>{" "}
        <div>
          <span>Age</span>{" "}
          <input
            value={Age}
            onChange={(e) => SetAge(e.target.value)}
            placeholder="Age name"
          ></input>
        </div>{" "}
        <button onClick={() => onSubmit()}>{FormData.buttonText}</button>
      </div>
    </div>
  );
}
