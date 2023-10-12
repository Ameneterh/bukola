import React from "react";

export default function SocialMedia(props) {
  return (
    <div className="w-7 h-7 bg-black rounded-full">
      <img src={props.imageURL} alt={props.imageALT} />
    </div>
  );
}
