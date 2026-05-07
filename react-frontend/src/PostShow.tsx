import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const PostShow = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/posts/${id}`).then((res) => {
        setTitle(res.data.title);
        setBody(res.data.body);
      });
    }
  }, [id]);

  return (
    <>
      {/* Create Button */}
      <br />
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 ml-5 rounded-md hover:bg-blue-700 cursor-pointer"
      >
        Back
      </Link>
      <h2 className="text-xl font-semibold mb-4 ml-5 mt-5">Show Post</h2>
   
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
          <tr>
           
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Body</th>
            
          </tr>
        </thead>
        <tbody>
           <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">{title}</td>
              <td className="px-4 py-3">{body}</td>
           </tr>
        </tbody>
      </table>
    </>
  );
};

export default PostShow;
