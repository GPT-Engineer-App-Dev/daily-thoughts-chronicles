import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-48 h-48 rounded-full mb-4" />
      <p className="text-lg">
        Hello! I'm the author of this blog. I write about various topics that interest me, ranging from technology to personal development. Stay tuned for more updates!
      </p>
    </div>
  );
};

export default About;