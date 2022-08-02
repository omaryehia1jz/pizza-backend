import { Router } from "express";
import { Category } from "../entities/Category";


const CategoryRouter = Router();

CategoryRouter.get("/", async (req, res) => {
    const category = await Category.find();
    res.json({ Category })
});

CategoryRouter.post("/", async (req, res) => {
    try {
        const {name} = req.body;

        const category = Category.create({
            name
        })
        await category.save();
        res.json(category)
    } catch (error) {
        res.status(500).json({ message: error });

    };

})