import { User } from "../app/domain/user.entity";
import { MigrationInterface, QueryRunner } from "typeorm"

export class AddUser1688865462245 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const user = new User();
        user.name = 'John Doe';
        user.email = 'johndoe@example.com';
        user.password = 'password123';

        await queryRunner.manager.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
