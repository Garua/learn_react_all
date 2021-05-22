const proxy = require('http-proxy-middleware')
module.exports = function (app){
    app.use(
        proxy('/api1',{ // 遇见/api1前缀的请求，就会触发代理
            target:'http://localhost:5000',//请求转发给谁
            changeOrigin:true,//控制服务器收到的响应头中host字段的值 host:标识请求是从哪发来的

            //把api1替换成'',不然路径不对
            pathRewrite:{'^api1':''} // 重写请求路径
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            //把api1替换成'',不然路径不对
            pathRewrite:{'^api2':''}
        })
    )
}
