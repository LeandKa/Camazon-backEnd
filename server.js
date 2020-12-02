import dotenv from 'dotenv'

dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';

const app = express();

var senha = process.env.MONGO_DB

var URI = `mongodb+srv://admin:${senha}@camazon.cxdac.mongodb.net/<dbname>?retryWrites=true&w=majority`

app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect(URI || "sd", {
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

app.listen(process.env.PORT || 3000, () => {
    console.log('Estou sendo lido')
})