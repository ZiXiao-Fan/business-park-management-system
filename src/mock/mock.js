import Mock from "mockjs"

Mock.mock("https://www.demo.com/login","post",(options)=>{
    const {username,password} = JSON.parse(options.body) 

    if(username=="admin"&&password=="admin123"){
         return {
        code:200,
        message:"登陆成功",
        data:{
            username:"admin",
            token:"mocktokenadmin123"
        }
    }
    }
    else if(username=="user"&&password=="user123"){
         return {
        code:200,
        message:"登陆成功",
        data:{
            username:"user",
            token:"mocktokenuser123"
        }
    }
    }else if(username=="manager"&&password=="manager123"){
         return {
        code:200,
        message:"登陆成功",
        data:{
            username:"manager",
            token:"mocktokenmanger123"
        }
    }
    } else {
        return {
            code:401,
            message:"用户或密码有误！",
            data:""
        }
    }
   
})