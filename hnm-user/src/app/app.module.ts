import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './application/controllers/controllers.module';
import { RepositoryModule } from './infrastructure/repository/repository.module';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'hnm-database',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'hoangnm',
      entities: [User],
      synchronize: true,
    }),
    ControllersModule, RepositoryModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
