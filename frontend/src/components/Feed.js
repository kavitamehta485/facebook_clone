import React from 'react';
import './Feed.css';

function Feed() {
  return (
    <div className="feed-content">
      <div className="recentcontainer">
        <ul className="newpostheader nav nav-tabs nav-justified">
          <li>
            <a href="#">
              <i className="fa fa-pencil"></i>
              <span>Create a Post</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-book"></i>
              <span>Media Album</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-video-camera"></i>
              <span>Live Video</span>
            </a>
          </li>
        </ul>
        <div className="newpost">
          <textarea placeholder="Post Something..."></textarea>
        </div>
        <ul className="newpostfooter nav nav-tabs nav-justified">
          <li>
            <a href="#">
              <i className="fa fa-picture-o"></i>
              <span>Photo/Video</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-users"></i>
              <span>Tag Friends</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-map-marker"></i>
              <span>Check In</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="recentcontainer">
        <div className="newpostheader">
          <a href="#">
            <img src="/images/profile.png" alt="Profile" />
            <div>
              <span className="name">Michael Korver</span>
              <span className="timelocation">
                <span>8 mins</span>
                <i className="fa fa-globe"></i>
              </span>
            </div>
          </a>
        </div>
        <div className="newpost">
          <div className="postcontent">
            <p>Facebook just announced a new feature, check it out!</p>
          </div>
          <div className="card">
            <img src="/images/post.png" alt="Post" />
          </div>
        </div>
        <ul className="newpostfooter nav nav-tabs nav-justified">
          <li>
            <a href="#">
              <i className="fa fa-thumbs-o-up"></i>
              <span>Like</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-comment-o"></i>
              <span>Comment</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-share"></i>
              <span>Share</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Feed;
