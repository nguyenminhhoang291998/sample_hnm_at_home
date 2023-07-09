import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './application/controllers/controllers.module';
import { RepositoryModule } from './infrastructure/repository/repository.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ControllersModule, RepositoryModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
