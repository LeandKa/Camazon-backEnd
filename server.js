import dotenv from 'dotenv'

dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(cors());

app.get('/api/config/paypal',(req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders',orderRouter)


app.get('/', (req, res) => {
    res.send('Server is ready');
})


app.use((err, req, res, next) => {
    res.status(500).send({ messag: err.message });
})

app.listen(5000, () => {
    console.log('IS rEAD')
})