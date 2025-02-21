// require('dotenv').config();
// const mongoose = require('mongoose');

// // var DB_URL =`${process.env.MONGO_URL}://${process.env.HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

// module.exports= 
// mongoose.connect(DB_URL)
//         .then(()=>{
//             console.log("MongoDB connected to Remote Server successfully");
//         })
//         .catch((error)=>{
//              console.log("Error :"+error);
//         });
// console.log("mongodb global connection is working");

require('dotenv').config();
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@muskio7.8thjq.mongodb.net/${process.env.MONGO_DB}`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

module.exports=mongoose.connect(uri, clientOptions)
                .then(()=>{
                  console.log("MongoDB connected successful to Atlas")
                })
                .catch((err)=>{
                  console.log("Connection Error",err);
                });
