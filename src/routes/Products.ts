import { Router } from "express";
import { Product } from "../entities/Product";


const ProductsRouter = Router();

ProductsRouter.get("/", async (req, res) => {
    const products = await Product.find();
    res.json({ products })
});

ProductsRouter.post("/", async (req, res) => {
    try {
        const { name, desc, price } = req.body;

        const product = Product.create({
            name,
            desc,
            price,
        })
        await product.save();
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error });

    };

})

export default ProductsRouter;