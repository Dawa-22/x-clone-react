import React from "react";import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./Widget.css" ;
import { Height } from "@mui/icons-material";


function Widget() {
  return (
      <div className="widget">
        <div className="widget_input">
          <SearchRoundedIcon className="widget_search"/>
          <input placeholder="Search" type="text" />
        </div>


        <div className="widget_container">
          <h2>What's happening</h2>

          <TwitterTweetEmbed tweetId='801119043428249600'/>

          <TwitterTimelineEmbed 
          sourceType="profile"
          screenName="ElonMusk"
          options={{Height: 400}}/>

          <TwitterShareButton
          url=""
          options={{text: "#Coderlife", via:"#programmer memes"}}/>
        </div>
      </div>
  );
}

export default Widget;
