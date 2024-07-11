import React from 'react';
import './CenterSection.css';
import profile from "./images/profile.jpg"

function CenterSection() {
  return (
    <div className="center">
      <div className="top_box">
        {/* Repeat the story_card structures */}
      </div>
      <div className="my_post">
        <div className="post_top">
          <img src={profile} alt="profile" />
          <input type="text" placeholder="What's on your mind, Asad?" />
        </div>
        <hr />
        <div className="post_bottom">
          <div className="post_icon">
            <i className="fa-solid fa-video red"></i>
            <p>Live</p>
          </div>
          <div className="post_icon">
            <i className="fa-solid fa-images green"></i>
            <p>Photo/video</p>
          </div>
          <div className="post_icon">
            <i className="fa-regular fa-face-grin yellow"></i>
            <p>Feeling/activity</p>
          </div>
        </div>
      </div>
      {/* Repeat similar structures for friends posts */}
    </div>
  );
}

export default CenterSection;
