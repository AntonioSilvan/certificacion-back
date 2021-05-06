import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Questions } from '../questions/question.entity';
import { Answers } from '../answers/answers.entity';

@Entity()
export class Managers {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    update_at: Date

    @OneToMany( () => Questions, question => question.manager)
    question: Questions[];

    @OneToMany( () => Answers, answers => answers.manager)
    answers: Answers[];
}