import { AppConfig } from "./app-config/app-config";
import { PostgresConfig } from "./postgres/postgres.interface";

export interface Config{
    appConfig: AppConfig;
    postgres: PostgresConfig;
}