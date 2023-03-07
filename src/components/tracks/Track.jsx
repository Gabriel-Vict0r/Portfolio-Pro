import React from "react";
import '../../sass/components/tracks.sass'
const Track = ({title, text}) => {
    return <div className="track">
        <h2 className="track-title">{title}</h2>
        <p className="track-text">{text}</p>
  </div>;
};

export default Track;