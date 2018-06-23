const router=require('koa-router')()
const routes=require('./routers/routes')

routes.forEach(route=>{ 
	if(route.method==='get'){
		router.get(route.path,route.asyncFn)
	}else if(route.method==='post'){
		router.post(route.path,route.asyncFn)
	}else{
		console.log("The method for "+route.path+' can not be resolve correctly!')
	}
})

module.exports=router.routes()