import { Link } from "react-router-dom";
import "./stylesheets/MenuBar.css";
import { signOut } from "firebase/auth";
export default function MenuBar() {
  return (
    <div className="MenuContainer">
      <div>
        <span className="MenuHeader">MyHooks</span>
        <span className="Links">
          <Link className="noDecoration" to="/">
            <span>List of all</span>
          </Link>
        </span>
        <span className="Links">
          <Link className="noDecoration" to="/Create">
            <span>Create Data</span>
          </Link>
        </span>
        <span className="Links">
          <Link className="noDecoration" to="/FetchOne">
            <span>Get One</span>
          </Link>
        </span>
        <span className="Links">
          <Link className="noDecoration" to="/Delete">
            <span>Delete</span>
          </Link>
        </span>
        <span className="Links">
          <Link className="noDecoration" to="/Update">
            <span>Update</span>
          </Link>
        </span>

        <span style={{ float: "right" }} className="Links">
          <Link className="noDecoration" to="/Login">
            <span>Login/Register</span>
          </Link>
        </span>
      </div>
    </div>
  );
}
