import React from 'react';
import './CenterSection.css';

// Importing images
import profileImg from './images/profile.jpg';
import uploadImg from './images/upload.png';
import airoplaneReelImg from './images/airoplane-reel.jpeg';
import qasimmImg from './images/qasimm.jpg';
import story4Img from './images/story_4.png';
import shabanImg from './images/shaban.jpg';
import reel2Img from './images/reel-2.jpeg';
import hasnainImg from './images/hasnain.jpg';
import sirPicImg from './images/Sir-pic.jpeg';
import postSirImg from './images/post-sir.webp';
import likeImg from './images/like.png';
import heartImg from './images/heart.png';
import postQasimImg from './images/post-qasim.webp';
import learnPostImg from './images/learn-post.webp';
import muzamilImg from './images/muzamil.jpg';
import post5Img from './images/post5.webp';
import tahaImg from './images/taha.jpg';
import post7Img from './images/post7.webp';

const CenterSection = () => {
  return (
    <div className="center">
      <div className="top_box">
        <div className="my_story_card">
          <img src={profileImg} alt="my-profile" />
          <div className="story_upload">
            <img src={uploadImg} alt="upload" />
            <p className="story_tag">Create story</p>
          </div>
        </div>

        <div className="story_card">
          <img src={airoplaneReelImg} alt="airoplane-reel" />
          <div className="story_profile">
            <img src={qasimmImg} alt="qasimm" />
          </div>
          <div className="story_name">
            <p className="name">
              M Qasim <br />
              Mughal
            </p>
          </div>
        </div>

        <div className="story_card shaban">
          <img src={story4Img} alt="story_4" />
          <div className="story_profile">
            <img src={shabanImg} alt="shaban" />
          </div>
          <div className="story_name">
            <p className="name">
              Shaban <br />
              Jatt
            </p>
          </div>
        </div>

        <div className="story_card">
          <img src={reel2Img} alt="reel-2" />
          <div className="story_profile">
            <img src={hasnainImg} alt="hasnain" />
          </div>
          <div className="story_name">
            <p className="name">
              Hasnain <br />
              Raza
            </p>
          </div>
        </div>
      </div>

      <div className="my_post">
        <div className="post_top">
          <img src={profileImg} alt="profile" />
          <input type="text" placeholder="What's on you mind, Asad?" />
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

      {/* One Post */}
      <div className="friends_post">
        <div className="friend_post_top">
          <div className="img_and_name">
            <img src={sirPicImg} alt="Sir" />
            <div className="friends_name">
              <a href="https://www.facebook.com/rizwanbhatti15">
                <p className="friends_name">Muhammad Rizwan</p>
              </a>
              <p className="time">16h.<i className="fa-solid fa-user-group"></i></p>
            </div>
          </div>
          <div className="menu">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <img src={postSirImg} alt="post-sir" />
        <div className="info">
          <div className="emoji_img">
            <img src={likeImg} alt="like" />
            <img src={heartImg} alt="heart" />
            <p style={{ fontSize: '14px' }}>You, and 2K others</p>
          </div>
          <div className="comment">
            <p style={{ cursor: 'pointer' }}>421 <i className="ri-chat-3-fill"></i></p>
            <p style={{ cursor: 'pointer' }}>1.3K <i className="ri-share-forward-fill"></i></p>
          </div>
        </div>
        <hr />
        <div className="like">
          <div className="like_icon">
            <i style={{ color: '#0866ff', cursor: 'pointer' }} className="ri-thumb-up-fill"></i>
            <p style={{ cursor: 'pointer' }}>Like</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-chat-3-line"></i>
            <p style={{ cursor: 'pointer' }}>Comments</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-whatsapp-line"></i>
            <p style={{ cursor: 'pointer' }}>Send</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-share-forward-line"></i>
            <p style={{ cursor: 'pointer' }}>Share</p>
          </div>
        </div>
      </div>

      {/* Two Post */}
      <div className="friends_post">
        <div className="friend_post_top">
          <div className="img_and_name">
            <img src={qasimmImg} alt="qasimm" />
            <div className="friends_name">
              <a href="https://www.facebook.com/amjad.mughal.3194524">
                <p className="friends_name">M Qasim Mughal</p>
              </a>
              <p className="time">2d.<i className="fa-solid fa-user-group"></i></p>
            </div>
          </div>
          <div className="menu">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <img src={postQasimImg} alt="post-qasim" />
        <div className="info">
          <div className="emoji_img">
            <img src={likeImg} alt="like" />
            <img src={heartImg} alt="heart" />
            <p style={{ fontSize: '14px' }}>You, and 40 others</p>
          </div>
          <div className="comment">
            <p style={{ cursor: 'pointer' }}>218 <i className="ri-chat-3-fill"></i></p>
            <p style={{ cursor: 'pointer' }}>600 <i className="ri-share-forward-fill"></i></p>
          </div>
        </div>
        <hr />
        <div className="like">
          <div className="like_icon">
            <i style={{ color: '#f52c4c', cursor: 'pointer' }} className="ri-heart-3-fill"></i>
            <p style={{ cursor: 'pointer' }}>Like</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-chat-3-line"></i>
            <p style={{ cursor: 'pointer' }}>Comments</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-whatsapp-line"></i>
            <p style={{ cursor: 'pointer' }}>Send</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-share-forward-line"></i>
            <p style={{ cursor: 'pointer' }}>Share</p>
          </div>
        </div>
      </div>

      {/* Three Post */}
      <div className="friends_post">
        <div className="friend_post_top">
          <div className="img_and_name">
            <img src={shabanImg} alt="shaban" />
            <div className="friends_name">
              <a href="https://www.facebook.com/profile.php?id=100078267934388">
                <p className="friends_name">Shaban Jatt</p>
              </a>
              <p className="time">5d.<i className="fa-solid fa-user-group"></i></p>
            </div>
          </div>
          <div className="menu">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <img src={learnPostImg} alt="learn-post" />
        <div className="info">
          <div className="emoji_img">
            <img src={likeImg} alt="like" />
            <img src={heartImg} alt="heart" />
            <p style={{ fontSize: '14px' }}>You, and 1.1K others</p>
          </div>
          <div className="comment">
            <p style={{ cursor: 'pointer' }}>1.1K <i className="ri-chat-3-fill"></i></p>
            <p style={{ cursor: 'pointer' }}>1.9K <i className="ri-share-forward-fill"></i></p>
          </div>
        </div>
        <hr />
        <div className="like">
          <div className="like_icon">
            <i style={{ color: '#0866ff', cursor: 'pointer' }} className="ri-thumb-up-fill"></i>
            <p style={{ cursor: 'pointer' }}>Like</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-chat-3-line"></i>
            <p style={{ cursor: 'pointer' }}>Comments</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-whatsapp-line"></i>
            <p style={{ cursor: 'pointer' }}>Send</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-share-forward-line"></i>
            <p style={{ cursor: 'pointer' }}>Share</p>
          </div>
        </div>
      </div>

      {/* Four Post */}
      <div className="friends_post">
        <div className="friend_post_top">
          <div className="img_and_name">
            <img src={muzamilImg} alt="muzamil" />
            <div className="friends_name">
              <a href="https://www.facebook.com/profile.php?id=100011732759819">
                <p className="friends_name">Muzammil Mughal</p>
              </a>
              <p className="time">1w.<i className="fa-solid fa-user-group"></i></p>
            </div>
          </div>
          <div className="menu">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <img src={post5Img} alt="post5" />
        <div className="info">
          <div className="emoji_img">
            <img src={likeImg} alt="like" />
            <img src={heartImg} alt="heart" />
            <p style={{ fontSize: '14px' }}>You, and 20 others</p>
          </div>
          <div className="comment">
            <p style={{ cursor: 'pointer' }}>21 <i className="ri-chat-3-fill"></i></p>
            <p style={{ cursor: 'pointer' }}>48 <i className="ri-share-forward-fill"></i></p>
          </div>
        </div>
        <hr />
        <div className="like">
          <div className="like_icon">
            <i style={{ color: '#0866ff', cursor: 'pointer' }} className="ri-thumb-up-fill"></i>
            <p style={{ cursor: 'pointer' }}>Like</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-chat-3-line"></i>
            <p style={{ cursor: 'pointer' }}>Comments</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-whatsapp-line"></i>
            <p style={{ cursor: 'pointer' }}>Send</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-share-forward-line"></i>
            <p style={{ cursor: 'pointer' }}>Share</p>
          </div>
        </div>
      </div>

      {/* Five Post */}
      <div className="friends_post">
        <div className="friend_post_top">
          <div className="img_and_name">
            <img src={tahaImg} alt="taha" />
            <div className="friends_name">
              <a href="https://www.facebook.com/profile.php?id=100076109299077">
                <p className="friends_name">Taha Riaz</p>
              </a>
              <p className="time">1w.<i className="fa-solid fa-user-group"></i></p>
            </div>
          </div>
          <div className="menu">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <img src={post7Img} alt="post7" />
        <div className="info">
          <div className="emoji_img">
            <img src={likeImg} alt="like" />
            <img src={heartImg} alt="heart" />
            <p style={{ fontSize: '14px' }}>You, and 80 others</p>
          </div>
          <div className="comment">
            <p style={{ cursor: 'pointer' }}>91 <i className="ri-chat-3-fill"></i></p>
            <p style={{ cursor: 'pointer' }}>38 <i className="ri-share-forward-fill"></i></p>
          </div>
        </div>
        <hr />
        <div className="like">
          <div className="like_icon">
            <i style={{ color: '#0866ff', cursor: 'pointer' }} className="ri-thumb-up-fill"></i>
            <p style={{ cursor: 'pointer' }}>Like</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-chat-3-line"></i>
            <p style={{ cursor: 'pointer' }}>Comments</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-whatsapp-line"></i>
            <p style={{ cursor: 'pointer' }}>Send</p>
          </div>
          <div className="like_icon">
            <i style={{ cursor: 'pointer' }} className="ri-share-forward-line"></i>
            <p style={{ cursor: 'pointer' }}>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterSection;
