import React, { useState } from "react";
import * as client from "../client";
import "../SignUpUser/SignUpUser.css"
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
function SignUpUserDetails() {
  const userid = useParams().id;
  console.log("id", userid);
  const [credentials, setCredentials] = useState({ id: userid,firstName: "", lastName: "" , email: ""});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({ id: userid, firstName: "", lastName: "" , email: ""});
  const save = async () => {
    //setIsEditMode(false);
    // console.log("after change :", account);
    const response= await client.updateUser(credentials);
    //const userId = String(response._id);
    setUser({ firstName: response.firstName, lastName: response.lastName, email: response.email });
    navigate(`/${userid}`);
};
 
  return (
    <div className="details-container">
      <h1 class="signup-heading">Sign Up</h1>
      <div className="input-container">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={credentials.firstName}
          onChange={(e) =>
            setCredentials({ ...credentials, firstName: e.target.value })
          }
        />
      </div>
      <div className="input-container">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={credentials.lastName}
          onChange={(e) =>
            setCredentials({ ...credentials, lastName: e.target.value })
          }
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email ID:</label>
        <input
          type="text"
          id="email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
      </div>
<br/>
      {error && <p className="error-message">{error}</p>}
     
      <button className="signup-button" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default SignUpUserDetails;
