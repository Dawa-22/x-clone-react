import React, { useState, useEffect } from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import { db } from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';

import FlipMove from 'react-flip-move'

function Feed() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    // Access the 'posts' collection and listen for real-time updates
    const unsubscribe = onSnapshot(collection(db, "post"), (snapshot) => {
      setPost(snapshot.docs.map(doc => doc.data()));
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h3>For you</h3>
      </div>

      <Tweetbox />
      <FlipMove>
      {post.map((post, index) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
          info={post.info}
        />
      ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
