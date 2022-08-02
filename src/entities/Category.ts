import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product";


@Entity()
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    name:string;
    
    @CreateDateColumn({type:"timestamp"})
    createdAT:Date;

    @UpdateDateColumn({type:"timestamp",onUpdate:"CURRENT_TIMESTAMP(6)",})
    updatedAT:Date;

    @OneToMany (()=>Product,(product)=>product.category)
    product: Product
}