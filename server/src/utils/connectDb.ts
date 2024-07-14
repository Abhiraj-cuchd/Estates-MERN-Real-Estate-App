import mongoose from "mongoose";
import defaults from '../config/default'
import { HttpError } from "http-errors";
import logger from "./logger";

export const connectDB = async () => {
    const dbUri = defaults.dbUri;
    try {

        mongoose.connection.on('connected', () => {
            logger.info(`Connected to Databse : ${mongoose.connection.name} host: ${mongoose.connection.host}`)
        });

        mongoose.connection.on('error', (err: HttpError) => {
            // console.log('Unable to Connect to Databse', err);
            logger.info(`Unable to Connect to Databse : ${err}`);
            process.exit(1);
        });

        await mongoose.connect(dbUri as string);

    } catch (error) {
        logger.info(`Unable to Connect to Databse : ${error}`);
        process.exit(1);
    }
}

export default connectDB;