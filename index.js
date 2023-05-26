const connectToMongo=require('./db');
const express = require('express')
var cors =require('cors');
const sendMail = require('./routes/sendMail');
const app = express()
const port = 5000
connectToMongo();
app.use(cors());
app.use(express.json())
// app.get("/mail",sendMail); 
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/userpres',require('./routes/userpresence'))
app.use('/api/notes',require('./routes/notes'))
app.use('/otp',require('./routes/sendMail'))
// app.use('/',async(req,res)=>{
//   res.send("server is running");
// })
app.listen(port, () => {
  console.log(`iNotebook backend  listening on port ${port}`)
})
