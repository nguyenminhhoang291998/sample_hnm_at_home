import { readFileSync } from "fs";
import { Config as ConfigInterface } from "./config.interface";
import { join } from "path";
export class Config {
    readConfig(): ConfigInterface {
        return JSON.parse(
            readFileSync(join(__dirname, "../../assets/app.config.json"), "utf-8"),

        )
    }
}