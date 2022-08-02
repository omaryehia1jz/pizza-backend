import { DataSource, Entity } from "typeorm";
import "reflect-metadata"
import { config } from "dotenv";
import { OrderLines } from "./entities/OrderLine";
import { Order } from "./entities/Order";
import { Product } from "./entities/Product";
import { Category } from "./entities/Category";


config();
export const AppDataSource = new DataSource({
type:"postgres",
host:process.env.PGHOST,
port:+process.env.PGPORT!,
username:process.env.PGUSER,
password:process.env.PGPASSWORD,
database:process.env.PGDATABASE,
synchronize:true,
logging:true,
entities:[OrderLines,Order,Product,Category],
migrations:["migrations/*.ts"],
subscribers:[],
});
