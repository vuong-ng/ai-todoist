import {neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as dotenv from 'dotenv';
import path from "path";

neonConfig.fetchConnectionCache = true;

dotenv.config({
    path: path.resolve(__dirname, '../../.env')
});

if (!process.env.DATABASE_CONNECTION_URL) {
    console.log('Database connection failed');
}
const sql = neon(process.env.DATABASE_CONNECTION_URL!)
export const db = drizzle({ client: sql });

