import "./index.scss";
import bg from "../../assets/bg.jpg";
import lgbg from "../../assets/lgbg.jpg";
import logo from "../../assets/logo.png";
import { Button,  Form, Input } from 'antd';type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
function Login(){
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
                        <Form
                        >
                            <Form.Item<FieldType>
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                            <Input.Password />
                            </Form.Item>

                            <Form.Item label={null}>
                            <Button  htmlType="submit">
                                Submit
                            </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
              </div>
          </div>
}

export default Login