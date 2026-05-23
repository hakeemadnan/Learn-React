import { useState } from "react";
import "./Commentr.css";
import CommentsForm from "./CommentForm";
export default function CommentR() {
  let [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "great job",
      rating: 4,
    },
  ]);
  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
    console.log("added new comment");
  };
  return (
    <>
      <div>
        <h3>All comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            <br />
            <span>rating = {comment.rating}</span>
            <br />
            <p>-{comment.username}</p>
          </div>
        ))}
      </div>
      <hr />

      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
