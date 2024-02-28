
const express = require(`express`)
const app = express()
const mongoose = require('mongoose');
const Product = require('./models/productModel')

app.use(express.json())
//routes
app.get(`/`, (req, res)=> {
    res.send(`hello whatsup`)
})
app.get(`/blog`, (req, res)=> {
    res.send(`hello this is blog`)
})

app.get('/products', async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    }
    catch (error){
        res.status(500).json({message: error.message})
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch (error){
        res.status(500).json({message: error.message})
    }
})
app.post('/product', async (req,res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({message: error.message})
    }
})
//update
app.put('/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `cannot find any product named ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//delete
app.delete('/products/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({message:`cannot find any product named ${id}`})
        }

    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})
mongoose.connect(`mongodb+srv://admin:nttt1999zx@cluster0.j8drhtt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0`).then(()=> {
    app.listen(3000, () => console.log(`running on port 3000`))
    console.log(`connected to mongodb`)})
    .catch((error)=>{console.error(error)})