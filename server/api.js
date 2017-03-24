const express = require('express');
const route = express.Router();

route.post('/api/login',function(req,res){
	res.send(req)
})

route.get('/api/info',function(req,res){
	res.send(req)
})