import { ConnectionOptions } from 'typeorm';

const config : ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "certificacion",
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize: false,
    migrationsTableName: "migrations",
    migrations: [__dirname + "/database/migrations/*.ts"],
    cli: {
        migrationsDir: "src/database/migrations"
    }
}

export default config;