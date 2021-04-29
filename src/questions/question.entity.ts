import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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
}