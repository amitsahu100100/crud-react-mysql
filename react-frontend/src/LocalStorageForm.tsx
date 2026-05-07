import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const  LocalStorageForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
   const storedPost = localStorage.getItem("post");

    if (storedPost) {
    const saved = JSON.parse(storedPost);
    console.log(saved);
    }

  }, []);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    localStorage.setItem("post", JSON.stringify({ title, body }));
    alert("Saved locally");
  };

  return (
    <>
   
    <Link to='/' className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
        Create
      </Link>
    
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4">Local Storage Form</h2>

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
export default LocalStorageForm;
