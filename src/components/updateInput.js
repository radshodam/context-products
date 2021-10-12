import React, { useState } from "react";

function UpdateInput() {
  const [user, setUser] = useState({ firstname: "", lastname: "", code: "" });
  //
  const Handelchange = (e) => {
    // value=e.target.value
    // name = e.target.name

    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <h1>{user.firstname}</h1>
      <h1>{user.lastname}</h1>
      <h1>{user.code}</h1>
      <form>
        <input
          name="code"
          value={user.code}
          onChange={Handelchange}
          type="text"
        />
        <input
          name="firstname"
          value={user.firstname}
          onChange={Handelchange}
          type="text"
        />
        <input
          name="lastname"
          value={user.lastname}
          onChange={Handelchange}
          type="text"
        />
      </form>
    </div>
  );
}

export default UpdateInput;
