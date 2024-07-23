import React from 'react';
import './RightSection.css'; // Ensure you create and link your CSS file correctly
import myImg from './images/my-img.jpg';
import rizwanImg from './images/sir-rizwan.jpg';
import tahaImg from './images/taha.jpg';
import qasimImg from './images/qasimm.jpg';
import saqibImg from './images/saqib.jpg';
import muzamilImg from './images/muzamil.jpg';
import hasnainImg from './images/hasnain.jpg';
import shabanImg from './images/shaban.jpg';
import hehaImg from './images/heha.jpg';
import shoukatImg from './images/shoukat.jpg';
import hadiImg from './images/hadi.jpg';
import huzaifaImg from './images/huzaifa.jpg';
import qmirImg from './images/qmir.png';

const RightSection = () => {
  const members = [
    { name: 'Muhammad Asad', img: myImg, link: 'https://www.facebook.com/profile.php?id=61560000850829' },
    { name: 'Muhammad Rizwan', img: rizwanImg, link: 'https://www.facebook.com/rizwanbhatti15' },
    { name: 'Taha Arain', img: tahaImg, link: 'https://www.facebook.com/taha.arain.311' },
    { name: 'M Qasim Mughal', img: qasimImg, link: 'https://www.facebook.com/amjad.mughal.3194524' },
    { name: 'Saqib Malik', img: saqibImg, link: 'https://www.facebook.com/profile.php?id=100062254291926' },
    { name: 'Muzammil', img: muzamilImg, link: 'https://www.facebook.com/mmuzammil.ahmed.5' },
    { name: 'Hasnain Raza', img: hasnainImg, link: 'https://www.facebook.com/profile.php?id=61556763772856' },
    { name: 'Shaban Jatt', img: shabanImg, link: 'https://www.facebook.com/profile.php?id=100078267934388' },
    { name: 'Hehaa Tanu', img: hehaImg, link: 'https://www.facebook.com/profile.php?id=61552571421858' },
    { name: 'Shoukat Ali', img: shoukatImg, link: 'https://www.facebook.com/shoukatali.mughal.144' },
    { name: 'Hadi Khalid', img: hadiImg, link: 'https://www.facebook.com/profile.php?id=61554597869743' },
    { name: 'Huzaifa Fawad', img: huzaifaImg, link: 'https://www.facebook.com/profile.php?id=100094045562342' },
    { name: 'Amir', img: qmirImg, link: '#' },
  ];

  return (
    <div className="right">
    
      <div className="pages">
        <h3>Your Pages and profiles</h3>
        <div className="menu">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      {members.map((member, index) => (
        <a key={index} href={member.link}>
          <div className="member">
            <div className="img">
              <img src={member.img} alt={`${member.name}-img`} />
            </div>
            <p>{member.name}</p>
          </div>
        </a>
      ))}
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
          <div className="div">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="div">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </div>
      <hr />
      <h4>Group conversations</h4>
      <a href="#">
        <div className="member margin">
          <div className="img plus">
            <i className="ri-add-line"></i>
          </div>
          <p>Create New Group</p>
        </div>
      </a>
    </div>
  );
};

export default RightSection;
