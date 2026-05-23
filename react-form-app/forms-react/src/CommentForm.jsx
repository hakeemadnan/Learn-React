import { useState } from "react";
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'username cannot be empty';
  }
  
  return errors;
};

export default function CommentsForm({addNewComment}) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });
  const formik = useFormik({
    initialValues: {
      username: '',
      remarks: '',
      rating: 5,
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // let[isValid,setIsValid] = useState(true)
  // let handleInputChange = (e) => {
  //   setFormData((currData) => {
  //     return { ...currData, [e.target.name]: e.target.value };
  //   });
  // };
  // let handleSubmit = (e) => {
  //   if(!formData.username){
  //     console.log("username is null")
  //     setIsValid(false);
  //     e.preventDefault();
  //     return
  //   }
  //   console.log(formData);
  //   e.preventDefault();
  //   addNewComment(formData);
    
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };
  return (
    <div>
      <h4>Give a Review</h4>
      <form onSubmit={formik.handleSubmit} action="">
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          onChange={formik.handleChange}
          type="text"
          placeholder="username"
          value={formik.values.username}
          name="username"
        />
         {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
        {/* {!isValid && <p style={{color:"red"}}>username cannot be empty</p>} */}
        <br />
        <br />
        <label htmlFor="remarks">Review</label>
        <textarea
          onChange={formik.handleChange}
          placeholder="write here ..."
          name="remarks"
          id="remarks"
          cols="30"
          rows="4"
          value={formik.values.remarks}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          onChange={formik.handleChange}
          type="number"
          min={1}
          max={5}
          placeholder="ratings"
          name="rating"
          value={formik.values.rating}
        />
        <br />
        <br />
        <button type="submit" style={{ color: "white", backgroundColor: "black" }}>
          Add Comment
        </button>
      </form>
    </div>
  );
}
