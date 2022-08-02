import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./Category";
import { Order } from "./Order";
import { Product } from "./Product";


@Entity()
export class OrderLines extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({nullable:false})
    quantity:number;

    @CreateDateColumn({type:"timestamp"})
    createdAT:Date;

    @UpdateDateColumn({type:"timestamp",onUpdate:"CURRENT_TIMESTAMP(6)",})
    updatedAT:Date;

    @OneToMany (()=>Product,(product)=>product.orderLine)
    product: Product[]

    @OneToOne (()=>Order,(order)=>order.orderLine)
    order: Order[]
}