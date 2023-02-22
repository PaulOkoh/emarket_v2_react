import express from 'express';
import data from './data.js'


const app = express();

app.get('/products',(req, res) => {
  res.send(data.products)
})

const port = process.env.PORT || 4041
app.listen(port, () => {
  console.log(`running on http://localhost:${port}`)
})