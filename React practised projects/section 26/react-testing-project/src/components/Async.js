import { useEffect, useState } from "react";

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //instead of fetching really , we inorder to check our component of works properly,we use a mock function instead of the real function
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
