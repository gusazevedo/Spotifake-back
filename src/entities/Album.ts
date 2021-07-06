import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity("albums")
class Album {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  user_id: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  userId: User;

  @Column()
  name: string;

  @Column()
  publication_date: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Album };
