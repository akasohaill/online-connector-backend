import { User } from "../models/userModel.js";

export const userPost = async (req, res) => {
  try {
    const { name, socialMediaHandle } = req.body;

    // Check if all required fields are present
    if (!name || !socialMediaHandle || !req.files || req.files.length === 0) {
      return res.status(400).json({ message: "All fields are required and at least one image must be uploaded." });
    }

    // Map the uploaded file paths
    const imagePaths = req.files.map(file => file.path);

    // Create a new User document
    const newUser = new User({
      name,
      socialMediaHandle,
      image: imagePaths
    });

    // Save the user to the database
    await newUser.save();

    res.status(200).json({
      message: "Uploaded successfully",
      user: newUser
    });

  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ message: "Server error" });
  }
};
