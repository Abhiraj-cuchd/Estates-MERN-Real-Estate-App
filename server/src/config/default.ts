import { config as conf } from 'dotenv';

conf();
export default {
    port: 1337,
    dbUri: process.env.MONGO_URL,
    saltWorkFactor: 10
}