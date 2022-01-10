import { Sequelize } from "sequelize";

const dbHost = process.env.DB_HOST || 'locahost'
const dbPort = process.env.DB_PORT as '3306'

const dbName = process.env.DB_NAME as string 
const dbUser = process.env.DB_USER as string 
const dbPassword = process.env.DB_PASS as string 

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: +dbPort,
    dialect: 'mysql'
});

