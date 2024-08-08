import React, { useState } from 'react';

export const CommentSection = () => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log({ comment, name, email, saveInfo });
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-lg font-semibold mb-4">Leave a Reply</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            rows="4"
            placeholder="Message"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-full p-4 border border-gray-300 rounded-lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            className="mr-2"
            checked={saveInfo}
            onChange={(e) => setSaveInfo(e.target.checked)}
          />
          <label className="text-sm text-gray-600">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};
