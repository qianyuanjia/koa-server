const Koa=require('koa')
const app=new Koa()
const bodyparser=require('koa-bodyparser')
const route=require('./route')
const port =process.argv[2] || 8000
//打印请求日志
app.use(async (ctx,next)=>{
	console.log(ctx.request.method+":"+ctx.request.path)
	console.log('###############')
	await next()
})
//将请求体中的数据绑定到ctx.request.body上
app.use(bodyparser())
//router middleware，处理各种路由请求
app.use(route)
app.listen(port)
console.log('The server is running at port '+port+'.....')