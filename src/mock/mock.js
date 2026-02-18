import Mock from "mockjs"

Mock.mock("https://www.demo.com/login","post",(option)=>{
    return {
        code:200,
        message:"登陆成功",
        data:{
            username:"铁柱",
            token:"mocktokenadmin123"
        }
    }
})