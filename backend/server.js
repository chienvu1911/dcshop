const express = require('express')
const dotenv = require('dotenv')
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js')
const connectDB = require('./config/db.js')
const productRoutes = require('./routes/productRoutes.js')

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.use('/api/products', productRoutes)

app.get('/api/product/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id);
    res.json(product)
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)