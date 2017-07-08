var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
 
// app.configure(function(){  
//   app.set('port', process.env.PORT || 8081);  
//   // app.set('views', __dirname + '/views');  
//   app.set('view engine', 'jade');  
//   app.use(express.favicon());  
//   app.use(express.logger('dev'));  
//   app.use(express.bodyParser());  
//   app.use(express.methodOverride());  
//   app.use(app.router);  
//   app.use(express.static(path.join(__dirname, 'public')));  
// });  

 app.use(express.static('public'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

// bodyParser.urlencoded解析form表单提交的数据
app.use(bodyParser.urlencoded({extended: false}));
 
// bodyParser.json解析json数据格式的
app.use(bodyParser.json());
 
app.post('/saveJSON',function(req, res){
 
    // 对象转换为字符串
    var str_json = JSON.stringify(req.body);    
 
    fs.writeFile('post.json', str_json, 'utf8', function(){
        // 保存完成后的回调函数
        console.log("保存完成");
    });
 
});
 
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})