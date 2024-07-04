import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded-lg" />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded-lg" />
        </div>
        <div>
          <label htmlFor="subject" className="block text-lg font-medium">Subject</label>
          <input type="text" id="subject" className="w-full p-2 border rounded-lg" />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea id="message" className="w-full p-2 border rounded-lg" rows="4"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
      </form>
    </div>
  );
};

export default Contact;