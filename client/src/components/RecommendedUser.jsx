import React from "react";

const RecommendedUser = ({ user }) => {
  return (
    <div className="flex flex-col gap-2">
      <img src={user.profilePicture || "/avatar.png"} alt={user.name} />
      <div className="flex flex-col gap-2">
        <p>{user.name}</p>
        <p>{user.username}</p>
      </div>
      <span className="text-xs">{user.location}</span>
      <span className="text-xs">{user.headline}</span>
      <button className="btn btn-primary">Follow</button>
    </div>
  );
};

export default RecommendedUser;
