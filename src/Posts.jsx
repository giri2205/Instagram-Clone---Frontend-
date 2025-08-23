import { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="posts-container" style={{ maxWidth: "500px", width: "100%" }}>
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <div key={post.id} className="post border rounded mb-4 p-2 bg-white shadow-sm">
                
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={post.profilePic}
                    alt={post.username}
                    className="rounded-circle me-2"
                    width="40"
                    height="40"
                  />
                  <strong>{post.username}</strong>
                </div>

                <div className="post-image mb-2">
                  <img src={post.postImg} alt="post" className="img-fluid rounded" />
                </div>


                <div className="d-flex mb-2">
                  <i className="bi bi-heart me-3 fs-4" role="button"></i>
                  <i className="bi bi-chat-dots me-3 fs-4" role="button"></i>
                  <i className="bi bi-send fs-4" role="button"></i>
                </div>


                <div className="post-caption">
                  <p><strong>{post.username}</strong> {post.caption}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading Posts...</div>
        )}
      </div>
    </div>
  );
}

export default Posts;
