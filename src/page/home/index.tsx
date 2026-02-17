
function Fanbutton(props:any){
    const mystyle = {padding:"10px 20px",borderRadius:"10px",backgroundColor:props.type=="primary"?"blue":"gray"}
    return <button style={mystyle}>自己封装的按钮</button>
}


function Home(){
    return <div>
            <div>我是首页</div>
            <Fanbutton></Fanbutton>
           </div>
        
            
    
}

export default Home