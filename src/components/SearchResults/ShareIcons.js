import React from 'react';
import {
  FacebookShareButton,
  InstapaperShareButton,
  TelegramShareButton,
  WhatsappShareButton
} from 'react-share';

import {
  FacebookIcon,
  InstapaperIcon,
  TelegramIcon,
  WhatsappIcon
} from 'react-share';

const ShareIcon = props => {
  return (
    <div className="icons-container">
      <div className="item" style={{ paddingLeft: 0 }}>
        <FacebookShareButton
          url="www.google.com"
          text="Check out this website: www.google.com"
        >
          <FacebookIcon size={32} round={true}></FacebookIcon>
        </FacebookShareButton>
      </div>

      <div className="item">
        <InstapaperShareButton
          url="www.google.com"
          text="Check out this website: www.google.com"
        >
          <InstapaperIcon size={32} round={true}></InstapaperIcon>
        </InstapaperShareButton>
      </div>

      <div className="item">
        <TelegramShareButton
          url="www.google.com"
          text="Check out this website: www.google.com"
        >
          <TelegramIcon size={32} round={true}></TelegramIcon>
        </TelegramShareButton>
      </div>

      <div className="item">
        <WhatsappShareButton
          url="www.google.com"
          text="Check out this website: www.google.com"
        >
          <WhatsappIcon size={32} round={true}></WhatsappIcon>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ShareIcon;
