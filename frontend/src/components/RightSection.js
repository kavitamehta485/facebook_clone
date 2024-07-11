import React from 'react';
import './RightSection.css';

function RightSection() {
  return (
    <div className="right">
      <div className="pages">
        <h3>Your Pages and profiles</h3>
        <div className="menu"><i className="fa-solid fa-ellipsis"></i></div>
      </div>
      <a href="https://www.facebook.com/profile.php?id=61560000850829">
        <div className="member">
          <div className="img">
            <img src="images/my-img.jpg" alt="my-account-img" />
          </div>
          <p>Muhammad Asad</p>
        </div>
      </a>
      <div className="switch">
        <i className="ri-group-2-line"></i>
        <p>Switch to Page</p>
      </div>
      <div className="switch">
        <i className="ri-megaphone-line"></i>
        <p>Create Promotion</p>
      </div>
      <hr />
      <div className="contact">
        <h3>Contact</h3>
        <div className="right">
          <div className="div"><i className="fa-solid fa-magnifying-glass"></i></div>
          <div className="div"><i className="fa-solid fa-ellipsis"></i></div>
        </div>
      </div>
      <a href="https://www.facebook.com/rizwanbhatti15">
        <div className="member">
          <div className="img">
            <img src="images/sir-rizwan.jpg" alt="account-img" />
          </div>
          <p>Muhammad Rizwan</p>
        </div>
      </a>
      {/* Repeat similar structures for other contacts */}
    </div>
  );
}

export default RightSection;
