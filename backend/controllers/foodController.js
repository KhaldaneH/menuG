import foodModel from "../models/foodModel.js";
import fs from 'fs';

// All food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Add food
const addFood = async (req, res) => {
    try {
        let image_filename = `${req.file.filename}`;

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Remove food
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Update food
const updateFood = async (req, res) => {
    try {
        const { id, name, description, price, category, image } = req.body;

        const food = await foodModel.findById(id);

        if (!food) {
            return res.status(404).json({ success: false, message: 'Food not found' });
        }

        // If a new image is provided, remove the old one
        if (req.file) {
            fs.unlink(`uploads/${food.image}`, () => {});
            food.image = req.file.filename;
        }

        // Update the other food fields
        food.name = name || food.name;
        food.description = description || food.description;
        food.price = price || food.price;
        food.category = category || food.category;

        await food.save();
        res.json({ success: true, message: 'Food updated successfully' });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { listFood, addFood, removeFood, updateFood };
