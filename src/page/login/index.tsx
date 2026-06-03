import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.scss";
import bg from "../../assets/bg.jpg";
import lgbg from "../../assets/lgbg.jpg";
import logo from "../../assets/logo.png";
import { login } from "../../api/user";
import { setToken } from "../../store/login/authSlice";

function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleLogin() {
    setLoading(true);
    form
      .validateFields()
      .then(async (res) => {
        const {
          data: { token, username },
        } = await login(res);
        dispatch(setToken(token));
        sessionStorage.setItem("username", username);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div>
      <div className="login" style={{ backgroundImage: `url(${bg})` }}>
        <div className="lgbg" style={{ backgroundImage: `url(${lgbg})` }}>
          <div className="part">
            <div className="title">
              <div className="logo">
                <img src={logo} width={100} alt="" />
              </div>
              <h1>Pengyuan Smart Park</h1>
            </div>
            <Form form={form}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                  {
                    pattern: /^\w{4,8}$/,
                    message: "Username must be 4-8 letters or numbers.",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password prefix={<LockOutlined />} />
              </Form.Item>

              <Form.Item label={null}>
                <Button
                  onClick={handleLogin}
                  loading={isLoading}
                  htmlType="submit"
                  type="primary"
                  style={{ width: "100%" }}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
