let index=async (ctx,next)=>{
	ctx.response.body="index page"
}
let log=async (ctx,next)=>{
	ctx.response.body=`
		<form action="/reg" method="post">
			<input type="text" name="username"/>
			<input type="password" name="pwd" />
			<input type="submit" value="提交" />
		</form>
	`
}

let reg=async (ctx,next)=>{
	ctx.response.body=`
		<h2>welcome ${ctx.request.body.username}</h2>
		<h3>Thanks for register in our website!</h3>
	`
}

let hello=async (ctx,next)=>{
	ctx.response.body=`
		hello,${ctx.params.name}
	`
}

module.exports=[
	{
		method:'get',
		path:'/',
		asyncFn:index
	},
	{
		method:'get',
		path:'/log',
		asyncFn:log
	},
	{
		method:'post',
		path:'/reg',
		asyncFn:reg
	},
	{
		method:'get',
		path:'/hello/:name',
		asyncFn:hello
	}
]