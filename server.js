const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGODB_URI ||
  "mongodb+srv://krishna123:krishna123@cluster0.fjxe1zd.mongodb.net/gofoodmern?retryWrites=true&w=majority";
  connection(mongoURI);
  if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
  }
const mongoDB=require("./db")

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
