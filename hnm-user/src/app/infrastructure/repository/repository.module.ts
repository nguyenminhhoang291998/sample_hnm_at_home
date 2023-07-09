import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/app/config/config.module';
import { UserRepository } from './users-repo/user-repo';

@Module({
    imports: [ConfigModule],
    providers: [UserRepository],
    exports: [UserRepository]
})
export class RepositoryModule {

}