import { Dropdown, Space } from "antd";
import { DownOutlined, UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../store/login/authSlice";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a target="_blank" rel="noopener noreferrer">Profile</a>,
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: <a target="_blank" rel="noopener noreferrer">Log Out</a>,
    icon: <PoweroffOutlined />,
  },
];

export default function MyHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "1") {
      navigate("/personal");
    }

    if (key === "2") {
      dispatch(removeToken());
      sessionStorage.removeItem("username");
    }
  };

  return (
    <Dropdown menu={{ items, onClick }}>
      <Space>
        Welcome, {sessionStorage.getItem("username")}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}
