
const express = require(`express`)
const app = express()
const mongoose = require('mongoose');


//routes
app.get(`/`, (req, res)=> {
    res.send(`hello whatsup`)
})
app.get(`/blog`, (req, res)=> {
    res.send(`hello this is blog`)
})



mongoose.connect(`mongodb+srv://admin:nttt1999zx@cluster0.j8drhtt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0`).then(()=> {
    app.listen(3000, () => console.log(`running on port 3000`))
    console.log(`connected to mongodb`)})
    .catch((error)=>{console.error(error)})