import axios from "axios";
import { useState } from "react";
import { ScrollArea } from "./ScrollArea";

const fetchFeeds = async (setFeeds) => {
  const { data, status } = await axios.get("/api/get-all-feed", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(status);
  setFeeds(data.feed_data || []);
};

const FeedItem = ({ feed }) => {
  return (
    <li>
      <h3>{feed.title}</h3>
      <p>{feed.description}</p>
    </li>
  );
};

const FeedList = ({ feeds }) => {
  return (
    <div>
      <h1>Feed List</h1>
      <ul>
        {feeds.map((feed) => (
          <FeedItem key={feed.title} feed={feed} />
        ))}
      </ul>
    </div>
  );
};

const DisplayFeed = () => {
  const [feeds, setFeeds] = useState([]);
  return (
    <ScrollArea onScrollEnd={() => fetchFeeds(setFeeds)}>
      <FeedList feeds={feeds} />
    </ScrollArea>
  );
};

export default DisplayFeed;
