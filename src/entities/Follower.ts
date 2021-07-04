import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("followers")
class Follower {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  user_follower: string;

  @JoinColumn({ name: "user_follower" })
  @ManyToOne(() => User)
  userFollower: User;

  @Column()
  user_followed: string;

  @JoinColumn({ name: "user_followed" })
  @ManyToOne(() => User)
  userFollwed: User;

  @CreateDateColumn()
  created_at: string;
}

export { Follower };
