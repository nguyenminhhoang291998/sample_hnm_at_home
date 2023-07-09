import { DataSource } from 'typeorm';
import { User } from '../../domain/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [User],
  migrations: ['dist/src/migrations/*.js'],
});