import "./index.scss";
import bg from "../../assets/bg.jpg";
import lgbg from "../../assets/lgbg.jpg";
import logo from "../../assets/logo.png";
import { Button,  Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LockOutlined } from '@ant-design/icons';
import { login } from "../../api/user";
import { setToken,removeToken } from "../../store/login/authSlice";
import { useDispatch } from "react-redux";

function Login(){
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    function handleLogin(){
        form.validateFields().then(async(res)=>{
            const {data:{token}} = await login(res)
            dispatch(setToken(token))

        }).catch((err)=>{console.log(err)})
    }
 
    return <div>
              <div className="login" style={{backgroundImage:`url(${bg})`}}>
                <div className="lgbg" style={{backgroundImage:`url(${lgbg})`}}>
                    <div className="part">
                        <div className="title">
                            <div className="logo">
                                <img src={logo} width={100} alt="" />
                            </div>
                            <h1>鹏远智慧园区</h1>
                        </div>
                        <Form form={form}
                        >
                            <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' },
                                    {pattern:/^\w{4,8}$/,message:'用户名必须是4-8位数字字母组合'}
                            ]}
                            >
                            <Input prefix={<UserOutlined />} />
                            </Form.Item>

                            <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                            <Input.Password prefix={<LockOutlined />}/>
                            </Form.Item>

                            <Form.Item label={null}>
                            <Button onClick={handleLogin} htmlType="submit" type="primary" style={{width:"100%"}}>
                               Login
                            </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
              </div>
          </div>
}

export default Login