import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Quiz{

@PrimaryGeneratedColumn()
id:number;


@Column()
quizIndex: number;

}