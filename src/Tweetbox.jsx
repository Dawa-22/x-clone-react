import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import "./Tweetbox.css";
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";


function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'post'), {
        displayName: 'Abenezer Solomon',
        userName: 'Abe21',
        verified: true,  // Note the lowercase here
        text: tweetMessage,
        image: tweetImage,
        avatar: "https://pbs.twimg.com/profile_images/1854013474306687001/KuXG6F3x_400x400.jpg",
        info: "10:38 AM · Nov 9, 2024 · 88M Views"
      });

      setTweetMessage('');
      setTweetImage('');
    } catch (error) {
      console.error("Error posting tweet: ", error);
    }
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweet_input">
          <IconButton>
            <Avatar src="https://pbs.twimg.com/profile_images/1854013474306687001/KuXG6F3x_400x400.jpg" />
          </IconButton>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What is happening?!"
            type="text"
          />
        </div>

        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetbox_imgInput"
          placeholder="Enter img URL"
          type="text"
        />
        <div className="btn">
          <button onClick={sendTweet} type="submit" className="tweet_btn">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default Tweetbox;

