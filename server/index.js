// 引入api
// const api = require('./api');
// 引入文件处理模块
const fs = require('fs');
// 引入路径处理模块
const path = require('path');
// 引入数据处理模块
const bodyParser = require('body-parser');
// 引入Express(服务器相关模块)
const express = require('express');
// 引入路有中间件
const router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(api)

// 访问静态资源文件
app.use(express.static(path.resolve(__dirname,'../dist')))
// 获取请求数据
// app.get('*',function(req,res){
// 	const html = fs.readFileSync(path.resolve(_dirname,'../dist/index.html'),'utf-8');
// 	res.send(html);
// })


//  登录
app.post('/api/login',function (req,res){
	let body = req.body;
	if (!body.id) {
		res.json({code:1,msg:'id is required'})
	}else{
		res.json({code:0,msg:null,data:{id:body.id}})
	}
})

//  提交学生填写信息
app.post('/api/sendInfo',function (req, res){
	console.log(req.query)
	console.log(req.params)
	console.log('---------------')
	console.log(req.body)
	let id = req.query.id;
	// sessionStorage.dorId = id;
	res.json({code:0,msg:null})
	// res.send(req.body.id)
})

// 获取学生信息
app.get('/api/getInfo',function (req, res){
	console.log(req.query)
	console.log(req.params)
	console.log('---------------')
	console.log(req.body)
	let id = req.query.id;
	// sessionStorage.dorId = id;
	res.json({code:0,msg:null,data:{id:id}})
	// res.send(req.body.id)
})

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use( function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
app.use( function (err, req, res, next) {
  res.status(500).send(req);
});



app.listen(8088);
console.log('success listen')