import { useEffect, useState } from "react";
import Stories from "./Stories";
import Posts from "./Posts";

export default function Feed() {
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((res) => res.json())
      .then(setStories);

    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      <Stories stories={stories} />
      <Posts posts={posts} />
    </div>
  );
}