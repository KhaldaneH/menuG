import express from 'express';
import { addFood, listFood, removeFood, updateFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image Storage Engine (Saving Image to uploads folder & renaming it)
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Route for listing all foods
foodRouter.get("/list", listFood);

// Route for adding a new food item (with file upload)
foodRouter.post("/add", upload.single('image'), addFood);

// Route for removing a food item
foodRouter.post("/remove", removeFood);

// Route for updating a food item (with file upload for image)
foodRouter.post("/update", upload.single('image'), updateFood);

export default foodRouter;
