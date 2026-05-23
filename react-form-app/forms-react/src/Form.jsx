import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password:""
  });
  //   let handleNameChange = (e) => {
  //     console.log(e.target.value);
  //     setFullname(e.target.value);
  //   };

  let handleInputChange = (e) => {
    setFormData((currData) => {
      return { ...currData,[e.target.name]: e.target.value };
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullname: "",
      username: "",
      password:""
    });
  };
  return (
    <form onSubmit={handleSubmit} action="">
      <label  htmlFor="fullname">Fullname</label>
      <input
        id="fullname"
        type="text"
        onChange={handleInputChange}
        value={formData.fullname}
        placeholder="enter you full name"
        name="fullname"
      />
      <br />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        onChange={handleInputChange}
        value={formData.username}
        placeholder="enter you  username"
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        onChange={handleInputChange}
        value={formData.password}
        placeholder="enter your password"
      />
      <button>Submit</button>
    </form>
  );
}
