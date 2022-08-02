import { Router } from "express";
import { Order } from "../entities/Order";
import { Product } from "../entities/Product";


const OrderRouter = Router();

OrderRouter.get("/", async (req, res) => {
    const order = await Order.find();
    res.json({order})
});

OrderRouter.post("/", async (req, res) => {
    try {
        const {firstname,lastname,mobile,city,address,orderNum} = req.body;

        const order = Order.create({
            firstname,
            lastname,
            mobile,
            city,
            address,
            orderNum
        })
        await order.save();
        res.json(order)
    } catch (error) {
        res.status(500).json({ message: error });

    };

})

OrderRouter.get("/:id", async (req, res) => {
    try {
    
        const id = +req.params.id;
        const order = Order.findOne({ where: { id }})
        
        res.json(order)
    } catch (error) {
        res.status(500).json({ message: error });

    };
})

export default OrderRouter ;