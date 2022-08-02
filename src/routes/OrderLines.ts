import { Router } from "express";
import { OrderLines } from "../entities/OrderLine";


const OrderLinesRouter = Router();

OrderLinesRouter.get("/", async (req, res) => {
    const orderLines = await OrderLines.find();
    res.json({ OrderLines})
});

OrderLinesRouter.post("/", async (req, res) => {
    try {
        const { quantity} = req.body;

        const orderLines = OrderLines.create({
            quantity
        })
        await orderLines.save();
        res.json(orderLines)
    } catch (error) {
        res.status(500).json({ message: error });

    };

})

export default OrderLinesRouter ;