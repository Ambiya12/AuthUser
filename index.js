import express from 'express';
import 'dotenv/config';
import connectDB from './database/client.js';
import authRouter from './routes/auth.js';
import eventRouter from './routes/events.js';
import cors from 'cors'
import serviceRouter from './routes/service.js';
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', authRouter, eventRouter, serviceRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my event API');
});

connectDB();
app.listen(8000, () => {
    console.log(`Server is running on port 8000 ${PORT}`);
});