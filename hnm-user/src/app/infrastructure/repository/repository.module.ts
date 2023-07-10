import { Module } from '@nestjs/common';
import { ConfigModule } from '../../config/config.module';
import { UserRepository } from './users-repo/user-repo';

@Module({
    imports: [ConfigModule],
    providers: [UserRepository],
    exports: [UserRepository]
})
export class RepositoryModule {

}