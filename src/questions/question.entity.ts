import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Managers } from '../managers/managers.entity';

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
}