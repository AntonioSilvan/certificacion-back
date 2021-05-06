import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Managers } from '../managers/managers.entity';
import { Answers } from '../answers/answers.entity'

@Entity()
export class Questions {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    update_at: Date

    @ManyToOne( () => Managers, manager => manager.question)
    manager: Managers

    @OneToMany( () => Answers, answers => answers.question)
    answers: Answers[]
}