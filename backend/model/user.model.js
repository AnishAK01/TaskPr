import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
 { name:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  phone:
  {
    type:Number,
    min:10,
    required:true
  },
  password:{
    required:true,
    type:String,
    
  },
  Date:{
    type:Date,
    default:new Date()
  }

});

const User = mongoose.model("User",UserSchema);
// const user4 = new User({
//   name:"Aizen",phone:"8743896614",username:"az22",password:"12345678"
// });
// User.find({}).then((res)=>{
//   console.log(res);
// })
// user4.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
export default User;