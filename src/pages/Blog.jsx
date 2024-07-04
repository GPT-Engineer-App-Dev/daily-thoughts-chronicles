import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", excerpt: "This is the excerpt for the first post." },
    { id: 2, title: "Second Post", excerpt: "This is the excerpt for the second post." },
    { id: 3, title: "Third Post", excerpt: "This is the excerpt for the third post." },
  ]);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    toast("Blog post deleted successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p>{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
              <Button variant="destructive" onClick={() => handleDelete(post.id)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;