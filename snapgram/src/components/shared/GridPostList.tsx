import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";
import React from "react";
import { Link } from "react-router-dom";

type GridPostListProps = {
  posts: Models.Document[];
};

const GridPostList = ({ posts }: GridPostListProps) => {
  const { user } = useUserContext();

  return (
    <ul className="grid-container">
      {posts.map((post, index) => (
        <li className="relative min-w-80 h-80" key={index}>
          <Link className="grid-post_link" to={`/posts/${post.$id}`}>
            <img
              className="w-full h-full object-cover"
              src={post.imageUrl}
              alt="image"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GridPostList;
