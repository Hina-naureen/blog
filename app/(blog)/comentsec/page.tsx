"use client";
import { useState, useEffect } from "react";

interface Comment {
  username: string;
  comment: string;
}

const CommentSection = () => {
  const [username, setUsername] = useState<string>(""); // State for username
  const [comment, setComment] = useState<string>(""); // State for comment
  const [comments, setComments] = useState<Comment[]>([]); // State for comments

  // Load comments from local storage
  useEffect(() => {
    try {
      const savedComments = JSON.parse(localStorage.getItem("comments") || "[]");
      setComments(savedComments);
    } catch (error) {
      console.error("Error loading comments from local storage:", error);
    }
  }, []);

  // Save a new comment
  const saveComment = () => {
    if (!username.trim() || !comment.trim()) {
      alert("Please enter both username and comment!");
      return;
    }

    const newComment: Comment = { username, comment };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);

    try {
      localStorage.setItem("comments", JSON.stringify(updatedComments));
    } catch (error) {
      console.error("Error saving comment to local storage:", error);
    }

    setUsername("");
    setComment("");
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>

      {/* Input for username */}
      <input
        type="text"
        className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#D6ADAD]"
        placeholder="Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Input for comment */}
      <textarea
        rows={4}
        className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#D6ADAD]"
        placeholder="Your Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      {/* Submit button */}
      <button
        className="w-full bg-[#5F4E4A] text-white py-2 rounded hover:bg-[#8a7773] transition duration-200"
        onClick={saveComment}
      >
        Post Comment
      </button>

      {/* Display comments */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Comments:</h3>
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow mb-3"
            >
              <p className="text-sm font-medium text-gray-700">{c.username}</p>
              <p className="text-sm text-gray-600">{c.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;