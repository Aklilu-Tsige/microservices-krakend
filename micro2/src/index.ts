import express from 'express';
import config from './config/config';
import userAccountRoutes from './routes/userAccountRoutes';

const app = express();


app.use(express.json());
app.use('/api', userAccountRoutes);

app.listen(config.PORT, config.HOSTNAME, () => {
    console.log(`Server is running on http://${config.HOSTNAME}:${config.PORT}`);
});