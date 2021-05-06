import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Managers } from '../managers/managers.entity';
import { Questions } from '../questions/question.entity';

@Entity()
export class Answers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string

    @Column({default: false})
    correct: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    update_at: Date

    @ManyToOne( () => Questions, question => question.answers)
    question: Questions

    @ManyToOne( () => Managers, manager => manager.answers)
    manager: Managers
}