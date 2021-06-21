import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Managers } from '../managers/managers.entity';

@Entity()
export class Exams {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    update_at: Date

    @ManyToOne( () => Managers, manager => manager.exams)
    manager: Managers
}