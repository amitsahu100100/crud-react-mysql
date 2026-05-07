import axios from "axios";
// import { create } from "domain";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const PostIndex = () => {
const [posts, setPosts] = useState([]);
 

  useEffect(() => {
  axios.get('http://localhost:8000/api/posts')
       .then(res => setPosts(res.data))
       .catch(err => console.log(err));
  }, []);

  const deletePost = (id:number) => {
    if(confirm("Are you sure to delete?")){
      axios.delete(`http://localhost:8000/api/posts/${id}`).then( () => {
        setPosts(posts.filter(p => p.id !== id));
      });
    }

  }

  // const deletePost = async (id: number) => {
  //   if (!window.confirm("Are you sure you want to delete?")) return;

  //   try {
  //     axios.delete(`http://localhost:8000/api/posts/${id}`);

  //     setPosts(prevPosts =>
  //       prevPosts.filter(post => post.id !== id)
  //     );
  //   } catch (error) {
  //     console.error("Delete failed:", error);
  //     alert("Failed to delete post");
  //   }
  // };
  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold mb-4">CRUD App</h1>

      {/* Create Button */}
      <Link to='/create' className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer mr-3">
        Create
      </Link>
      <Link to='/Localstorageform' className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
        Local Storage Form
      </Link>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Body</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {posts.map(post => 
            
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">{post.id}</td>
              <td className="px-4 py-3">{post.title}</td>
              <td className="px-4 py-3">{post.body}</td>

              <td className="px-4 py-3 flex gap-2">
               <Link to={`edit/${post.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer mr-3">
                Edit
              </Link>

                <Link to={`show/${post.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer mr-3">
                  Show
                </Link> 

                <button onClick={() => deletePost(post.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default PostIndex