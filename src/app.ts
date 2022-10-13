import express from 'express';
import productRouter from './router/ProductRouter';
import userRouter from './router/UserRouter';
import orderRouter from './router/OrderRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
