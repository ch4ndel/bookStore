import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};


//Create book



export const createBook = async (req, res) => {
  try {
    const { name, price, category, image, title } = req.body;

    // validation
    if (!name || !price || !category) {
      return res.status(400).json({
        message: "Name, price and category are required",
      });
    }

    const newBook = new Book({
      name,
      price,
      category,
      image,
      title,
    });

    const savedBook = await newBook.save();

    res.status(201).json({
      message: "Book created successfully",
      book: savedBook,
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
