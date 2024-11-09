import mongoose, { Schema } from 'mongoose';
import express  from 'express';

main().then(console.log("Connected to DB"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new Schema({
    name:String,
    phone:{type:Number,min:10},
    username:String,
    date:{type:Date,default:Date()}
});

const User = mongoose.model("User",userSchema);

const user4 = new User({
    name:"Aizen",phone:"8743896614",username:"az22",
});
// User.insertMany([{name:"Yash",phone:1234567899,username:"yk11",date:Date()},
//     {name:"Mihawk",phone:1234567899,username:"mk11",date:Date()},
//     {name:"Shanks",phone:1234567899,username:"sk11",date:Date()}]
   
// ).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
user4.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

User.find().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
