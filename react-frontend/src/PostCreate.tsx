import { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate(); // ✅ initialize

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      axios.post("http://localhost:8000/api/posts", {title:title, body:body})
      .then(()=> navigate('/'));
    } catch (err) {
      console.error(err);
      alert("Failed to save post");
    }
  };

  return (
    <>
    {/* Create Button */}
    <br/>
      <Link to='/' className="bg-blue-600 text-white px-4 py-2 ml-5 rounded-md hover:bg-blue-700 cursor-pointer">
        Back
      </Link>
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4">Create Post</h2>

      <div className="mb-4">
        <label className="block mb-1">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Submit
      </button>
    </form>
    </>
  );
};

export default PostCreate;
