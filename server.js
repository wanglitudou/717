// var http = require('http');
// var fs=require('fs'); 

// var querystring = require('querystring');

// var http = require('http');
// var querystring = require('querystring');
// var bodyParser = require('body-parser');
// var express = require('express');
// var app = express();

// //配置服务端口
// var server = app.listen(3000, function() {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('Example app listening at http://%s:%s', host, port);
// })

// app.use(bodyParser.json());

// //设置跨域访问
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

// //接口
// app.post('/mall/index/getGoodsChannel', function(req, res) {
//     console.log(req.query)
//     console.log(req.body)
//     res.status(200);
//     queryApi('/mall/index/getGoodsChannel', req.body).then(function(data) {
//          res.end(data)
//     }) 
// });

// function queryApi(path, query) {
//     return new Promise(function(resolve, reject) {
//         var postData = querystring.stringify(query)
//         var options = {
//             hostname: 'www.lb717.com',
//             path: path,
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'Content-Length': Buffer.byteLength(postData)
//             }
//         }
//         var data = '';
//         var clientRequest = http.request(options, function(response) {
//             response.setEncoding('utf8')
//             response.on('data', function(chunk) {
//                 data += chunk

//             })
//             response.on('end', function() {
//                 resolve(data)
//                 console.log('数据请求完成')
//             })
//         });

//         clientRequest.on('error', (e) => {
//             console.error(`请求遇到问题: ${e.message}`);
//         });

//         clientRequest.write(postData)
//         clientRequest.end()
//     })
// }