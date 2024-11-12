import React, {forwardRef} from "react";
import { Avatar, IconButton } from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';

import "./Post.css";



const Post = forwardRef(({
  displayName,
  userName,
  verified,
  text,
  image,
  avatar, 
  info },
  ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post_user">
        <IconButton aria-label="User avatar">
          <Avatar src={avatar} />
        </IconButton>
        <div className="post_head">
          <div className="post_header">
            <h4>
              {displayName}
              {verified && (
                <span style={{ marginLeft: "5px" }}>
                  <VerifiedRoundedIcon sx={{ fontSize: 20, color: "skyblue" }} />
                </span>
              )}
              <span>{userName}</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="posted_content">
        <div className="post_headDescript">
          <p>{text}</p>
        </div>
        {image && (
          <div className="post_img">
            <img src={image} alt="Post content" />
          </div>
        )}
        <div className="post_stats">
          <span className="post-date">{info}</span>
        </div>
        <div className="post_footer">
          <IconButton aria-label="Like"><FavoriteBorderIcon /></IconButton>
          <IconButton aria-label="Comment"><ChatBubbleOutlineRoundedIcon /></IconButton>
          <IconButton aria-label="Retweet"><AutorenewRoundedIcon /></IconButton>
          <IconButton aria-label="Share"><IosShareRoundedIcon /></IconButton>
        </div>
      </div>
    </div>
  );
});

export default Post;
