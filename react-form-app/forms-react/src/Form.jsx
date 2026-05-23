import { useState } from "react";

export default function Form() {
  let [fullName, setFullname] = useState("name");
  let handleNameChange = (e) => {
    console.log(e.target.value);
    setFullname(e.target.value);
  };

  return (
    <form action="">
      <label htmlFor="username">FullName</label>
      <input
      id="username"
        type="text"
        onChange={handleNameChange}
        value={fullName}
        placeholder="enter you full name"
      />
      <button>Submit</button>
    </form>
  );
}
