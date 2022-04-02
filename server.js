import express from 'express'
import routes from './routes/routes.js'
import mongoose from "mongoose"
import dotenv from 'dotenv'
//initialise les variable depuis .env
dotenv.config()


console.log("URI =" + process.env.MONGODB)
const PORT = process.env.PORT || 3030

//connexion Mongoose
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const app = express()

app.use(routes)
app.use(express.json())

app.listen(PORT, () => {
    console.log('Serveur lancé sur le port :' + PORT)
})