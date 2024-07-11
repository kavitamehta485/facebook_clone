import React from 'react';
import './LeftSection.css';

function LeftSection() {
  return (
    <div className="left">
      <a href="https://www.facebook.com/profile.php?id=61551117972893">
        <div className="img">
          <img src="images/profile.jpg" alt="profile" />
          <p>Muhammad Asad</p>
        </div>
      </a>
      {/* Repeat similar structures for the other links */}
      <div className="img">
        <img src="images/down_arrow.png" alt="See more" />
        <p className="see">See more</p>
      </div>
      <hr />
      <h2>Your shortcuts</h2>
      <p className="edit">Edit</p>
      {/* Repeat similar structures for the shortcuts */}
    </div>
  );
}

export default LeftSection;
