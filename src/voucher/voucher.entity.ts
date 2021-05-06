import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Users } from '../users/users.entity';

@Entity()
export class Voucher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string

    @Column({type: 'text'})
    full: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    update_at: Date

    @ManyToOne( () => Users, user => user.vouchers)
    user: Users
}