import { BaseEntity, Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Order extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    firstname:string;
    
    @Column({nullable:false})
    lastname:string;

    @Column({nullable:false})
    mobile:number;
    
    @Column({nullable:false})
    city:string;
    
    @Column({nullable:false})
    address:string;

    @Column({nullable:false})
    @Generated()
    orderNum:number;

    @CreateDateColumn({type:"timestamp"})
    createdAT:Date;

    @UpdateDateColumn({type:"timestamp",onUpdate:"CURRENT_TIMESTAMP(6)",})
    updatedAT:Date;
    orderLine: any;

}