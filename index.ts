import express from 'express';
import userAccountRoutes from './routes/userAccountRoutes';

const app = express();
const port = 8081;

app.use(express.json());
app.use('/api', userAccountRoutes);

app.listen(port, () => {
    console.log(`Micro1 is listening on port ${port}`);
});
