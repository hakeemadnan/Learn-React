import { useState } from "react";

export default function LikeButton() {
  let [isLiked, SetisLiked] = useState(false);
  let [clicks, setClicks] = useState(0);
  let toggleLike = () => {
    SetisLiked(!isLiked);
    setClicks(clicks + 1);
  };

  let likeStyle = { color: "red" };

  return (
    <div>
      <p onClick={toggleLike}>
        <span>clicks {clicks}</span>
        {isLiked ? (
          <i style={likeStyle} className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
