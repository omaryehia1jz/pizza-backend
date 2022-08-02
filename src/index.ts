import express,{json,urlencoded} from "express";
import { config } from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { AppDataSource } from "./data-source";
import ProductsRouter from "./routes/Products";
import OrderRouter from "./routes/Order";
import OrderLinesRouter from "./routes/OrderLines";


const app =express();

config();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({extended:false}));

app.use("/Products",ProductsRouter);
app.use("/Order",OrderRouter);
app.use("/OrderLinesRouter",OrderLinesRouter);


app.listen(process.env.PORT,async()=>{console.log(`i am running on ${process.env.PORT}`);

try {
    await AppDataSource.initialize();
    console.log("connected");
    } catch (error){
        console.log (error)
    }

});

