// middlewares/multerConfig.js
import multer from 'multer';
import path from 'path';

// Multer configuration for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save uploaded images in the 'uploads/' directory
  },
  filename: (req, file, cb) => {
    // Unique filename to avoid conflicts
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// File filter to only accept specific file types (jpeg, png)
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only images (jpeg, jpg, png) are allowed'));
  }
};

// Initialize multer with storage and file filter
export const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB max file size
  fileFilter: fileFilter
});
