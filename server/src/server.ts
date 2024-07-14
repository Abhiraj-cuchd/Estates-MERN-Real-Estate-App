import express from 'express';
import logger from './utils/logger';
import connectDB from './utils/connectDb';
import routes from './routes';
import defaults from './config/default'
import cors from 'cors'


const port = defaults.port;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'))



app.listen(port, async () => {
    logger.info(`Server running on port ${port}`);
    await connectDB();
    routes(app);
});