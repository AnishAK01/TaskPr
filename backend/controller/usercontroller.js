import express from 'express';
import mongoose from 'mongoose';
// import signup from './Routes/authuser.js';

import User  from '../model/user.model.js';


export const registerUser = async(req,res)=>{
    let { name, username, phone, password } = req.body;
    try {
      if(!name,!username,!phone,!password){
       return res.status(202).send("Invalid input.. Please fill your details");
      }
      const existingUser = await User.findOne({ username: username });
      if (existingUser) {
        res.status(200).send("existing user");
        return;
      }
      const user = new User({
        name: name,
        phone: phone,
        username: username,
        password: password
      })
      const savedUser = await user.save();
      console.log(savedUser);
      res.status(201).send(savedUser);
  
    } catch (error) {
      res.status(500).send("Server error")
    }
  
}

export const loginUser = ()=>{
  app.post('/login',async(req,res)=>{
    let {username,password} = req.body;
    try {
      const dbUser = await User.findOne({username:username,password:password});
  
      if(!dbUser){
        // console.log(dbUser);
       return res.status(201).send("Incorrect username or Password!!!");
      }
      res.status(200).send(`logged in - ${dbUser}`);
      
    } catch (error) {
      res.status(500).send("Server error");
    }
  });
  
}