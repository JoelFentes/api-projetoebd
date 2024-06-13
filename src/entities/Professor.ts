import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('professores')
export class Professor {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: '50'})
    nome: string
    
    @Column({type: 'varchar', length: '50'})
    email: string
    
    @Column({type: 'varchar', length: '25'})
    senha: string

}