import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFollowers1625409246638 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "followers",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_follower",
            type: "uuid",
          },
          {
            name: "user_followed",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUserFollower",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_follower"],
            // onDelete: "SET NULL",
            // onUpdate: "SET NULL",
          },
          {
            name: "FKUserFollowed",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_followed"],
            // onDelete: "SET NULL",
            // onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("followers");
  }
}
