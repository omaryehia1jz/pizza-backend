import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,OneToMany, OneToOne } from "typeorm";
import { Category } from "./Category";

@Entity()
export class Product extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    name:string; 

    @Column({nullable:false})
    desc:string;
    
    @Column({nullable:false})
    price:number;

    @CreateDateColumn({type:"timestamp"})
    createdAT:Date;

    @UpdateDateColumn({type:"timestamp",onUpdate:"CURRENT_TIMESTAMP(6)",})
    updatedAT:Date;

    @OneToOne (()=>Category,(category)=>category.product)
    category: Category
    orderLine: any;


}

