const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/cat-shop.router')
const PORT = process.env.PORT || 5000
const DB_URL = 'mongodb+srv://cat:root@cluster0.dqoqx.mongodb.net/?retryWrites=true&w=majority';
const app = express()

app.use(express.json())
app.use('/api', router)


const start = async ()=>{
    try{
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, ()=> console.log(`Server started on PORT:${PORT}`))
    } catch(e){
        console.log(e)
    }
}
start()