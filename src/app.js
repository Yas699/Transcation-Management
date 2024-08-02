import express from 'express';
import transcationRouter from './routes/transcation.js';
import { mongoConnection } from './database/connection.mjs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname} from 'path';


const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../envs/.env') })

//database connection
mongoConnection();

app.use(express.json());

app.use('/api', transcationRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
