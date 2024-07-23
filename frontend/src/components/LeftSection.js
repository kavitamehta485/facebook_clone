import React from 'react';
import './LeftSection.css';

// Importing images
import profileImg from './images/profile.jpg';
import friendImg from './images/friend.png';
import timeImg from './images/time.png';
import savedImg from './images/saved.png';
import groupImg from './images/group.png';
import watchImg from './images/watch.png';
import downArrowImg from './images/down_arrow.png';
import group1Img from './images/group1.jpg';
import group2Img from './images/group2.jpg';
import group3Img from './images/group3.jpg';
import group4Img from './images/group4.jpg';
import group5Img from './images/group5.jpg';
import group6Img from './images/group6.jpg';

const LeftSection = () => {
  return (
    <div className="left">
      <a href="https://www.facebook.com/profile.php?id=61551117972893">
        <div className="img">
          <img src={profileImg} alt="profile" />
          <p>Muhammad Asad</p>
        </div>
      </a>
      <a href="https://www.facebook.com/friends">
        <div className="img">
          <img src={friendImg} alt="friends" />
          <p>Friends</p>
        </div>
      </a>
      <a href="https://www.facebook.com/memories/?source=bookmark">
        <div className="img">
          <img src={timeImg} alt="memories" />
          <p>Memories</p>
        </div>
      </a>
      <a href="https://www.facebook.com/saved/?cref=28">
        <div className="img">
          <img src={savedImg} alt="saved" />
          <p>Saved</p>
        </div>
      </a>
      <a href="https://www.facebook.com/groups/feed/">
        <div className="img">
          <img src={groupImg} alt="groups" />
          <p>Groups</p>
        </div>
      </a>
      <a href="https://www.facebook.com/watch">
        <div className="img">
          <img src={watchImg} alt="watch" />
          <p>Video</p>
        </div>
      </a>
      <div className="img">
        <img src={downArrowImg} alt="see more" />
        <p className="see">See more</p>
      </div>
      <hr />
      <h2>Your shortcuts</h2>
      <p className="edit">Edit</p>
      <a href="https://www.facebook.com/groups/1162575404868338">
        <div className="shortcuts">
          <img src={group1Img} alt="Techno Kids Batch-6" />
          <p>Techno Kids Batch-6</p>
        </div>
      </a>
      <a href="https://www.facebook.com/groups/1511417763065949">
        <div className="shortcuts">
          <img src={group2Img} alt="Web Development Course" />
          <p>Web Development Course</p>
        </div>
      </a>
      <a href="https://www.facebook.com/groups/726277099641726">
        <div className="shortcuts">
          <img src={group3Img} alt="Web Development Course" />
          <p>Web Development Course</p>
        </div>
      </a>
      <a href="https://www.facebook.com/groups/661812752448323">
        <div className="shortcuts">
          <img src={group4Img} alt="Web and App Madaris" />
          <p>Web and App Madaris</p>
        </div>
      </a>
      <a href="https://www.facebook.com/groups/1664280200477055">
        <div className="shortcuts">
          <img src={group5Img} alt="Saylani Welfare Trust" />
          <p>Saylani Welfare Trust</p>
        </div>
      </a>
      <a href="https://www.facebook.com/groups/654423153517076">
        <div className="shortcuts">
          <img src={group6Img} alt="Technology For Kids" />
          <p>Technology For Kids</p>
        </div>
      </a>
      <div className="shortcuts margin">
        <img src={downArrowImg} alt="see more" />
        <p className="see">See more</p>
      </div>
    </div>
  );
};

export default LeftSection;
