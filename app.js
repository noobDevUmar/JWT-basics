const express = require('express')
const app = express();
const env = require('dotenv').config()
require('express-async-errors')

app.listen(process.env.PORT,()=>{
    console.log("app is listeining to port 5000")
})
const mainRouter = require('./routes/main')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


// middlewares

app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1',mainRouter)

app.use(errorHandlerMiddleware)


const start = async()=>{
    try {
        app.listen(process.env.PORT,()=>{
            console.log(`app is listeining to port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
} 
