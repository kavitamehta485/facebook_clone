import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="left-content">
      <div className="global-links">
        <a href="#">
          <img decoding="async" src="/images/profile.png" alt="Profile" /> First Last
          <span className="counter">1</span>
        </a>
        <a className="activepage" href="#">
          <img decoding="async" src="/images/nf.png" alt="News Feed" /> News Feed
          <span className="counter">
            <i className="fa fa-ellipsis-h"></i>
          </span>
        </a>
        <a href="#">
          <img decoding="async" src="http://icons.iconarchive.com/icons/wineass/ios7-redesign/512/Messages-icon.png" alt="Messages" /> Messenger
          <span className="counter">1</span>
        </a>
      </div>
      <div className="group-content">
        <h4>shortcuts</h4>
        <a href="#">
          <img decoding="async" src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" alt="Group" /> Group name
          <span className="counter">1</span>
        </a>
        <a href="#">
          <img decoding="async" src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" alt="Group" /> Group name
          <span className="counter">1</span>
        </a>
        <a href="#">
          <img decoding="async" src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" alt="Group" /> Group name
          <span className="counter">1</span>
        </a>
        <a href="#">
          <img decoding="async" src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" alt="Group" /> Group name
          <span className="counter">1</span>
        </a>
        <a href="#">
          <img decoding="async" src="http://theieltscoach.com/wp-content/uploads/2015/03/IELTS-Speaking-Tips-Icon-2.png" alt="Group" /> Group name
          <span className="counter">1</span>
        </a>
        <a href="#">
          <i className="fa fa-caret-down"></i>
          <span>See More...</span>
        </a>
      </div>
      <div className="group-content">
        <h4>explore</h4>
        <a href="#">
          <img decoding="async" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png" alt="Events" /> Events
          <span className="counter">1</span>
        </a>
        <a href="#">
          <img decoding="async" src="http://image.flaticon.com/icons/png/512/223/223120.png" alt="Saved" /> Saved
          <span className="counter">1</span>
        </a>
        <a href="#">
          <img decoding="async" src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-13/512/Webpage-icon.png" alt="Pages" /> Pages
          <span className="counter">1</span>
        </a>
        <a href="#">
          <img decoding="async" src="https://www.iconfinder.com/data/icons/unique-round-blue/93/group-512.png" alt="Groups" /> Groups
          <span className="counter">1</span>
        </a>
        <a href="#">
          <img decoding="async" src="http://www.thesuccesswriter.com/images/fundraising.png" alt="Fundraisers" /> Fundraisers
          <span className="counter">1</span>
        </a>
        <a href="#">
          <i className="fa fa-caret-down"></i>
          <span>See More...</span>
        </a>
      </div>
      <div className="group-content">
        <h4>create</h4>
        <a href="#">
          <img decoding="async" src="http://1agb93314bcf1knhv22id9u9.wpengine.netdna-cdn.com/wp-content/uploads/2015/02/Marketing_Advertising_Icon.png" alt="Ad" /> Ad
        </a>
        <a href="#">
          <img decoding="async" src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-13/512/Webpage-icon.png" alt="Page" /> Page
        </a>
        <a href="#">
          <img decoding="async" src="https://www.iconfinder.com/data/icons/unique-round-blue/93/group-512.png" alt="Group" /> Group
        </a>
        <a href="#">
          <img decoding="async" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png" alt="Event" /> Event
        </a>
        <a href="#">
          <img decoding="async" src="http://www.thesuccesswriter.com/images/fundraising.png" alt="Fundraiser" /> Fundraiser
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
