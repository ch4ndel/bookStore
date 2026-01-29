import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function CreateBook() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    title: "",
    imageUrl: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/book/create", formData);
      setMessage("Book created successfully!");
      setFormData({
        name: "",
        price: "",
        category: "",
        title: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error creating book:", error);
      setMessage("Failed to create book. Try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-30 m-12 p-4 border rounded-lg shadow  ">
  <h1 className="text-xl font-bold mb-4 text-center">Create Book</h1>

  {message && (
    <p className="mb-3 text-center text-sm font-medium text-green-600">
      {message}
    </p>
  )}

  <form className="space-y-3" onSubmit={handleSubmit}>
    <div>
      <label className="block text-sm font-medium">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-2 py-1.5 border rounded text-sm"
        required
      />
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div>
        <label className="block text-sm font-medium">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-2 py-1.5 border rounded text-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-2 py-1.5 border rounded text-sm"
          required
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="w-full px-2 py-1.5 border rounded text-sm"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium">Image URL</label>
      <input
        type="text"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        className="w-full px-2 py-1.5 border rounded text-sm"
        required
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-1.5 rounded text-sm hover:bg-blue-600"
    >
      Create Book
    </button>
  </form>
</div>

    </>
  );
}

export default CreateBook;
