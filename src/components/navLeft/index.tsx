import { Menu } from "antd";
import { useState, useEffect } from "react";
import type { MenuProps } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import icons from "./iconList";
import logo from "../../assets/logo.png";
import "./index.scss";

type MenuItem = Required<MenuProps>["items"][number];

interface MenuDataType {
  key: string;
  icon: string;
  label: string;
  children?: MenuDataType[];
}

export default function NavLeft() {
  const { menuList } = useSelector((state: any) => state.authSlice);
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    configMenu();
  }, [menuList]);

  async function configMenu() {
    const mappedData = mapMenuData(menuList);
    setMenuData(mappedData);
  }

  function handleClick({ key }: { key: string }) {
    navigate(key);
  }

  function mapMenuData(data: MenuDataType[]): MenuItem[] {
    return data.map((item: MenuDataType) => ({
      label: item.label,
      key: item.key,
      icon: icons[item.icon],
      children: item.children ? mapMenuData(item.children) : null,
    }));
  }

  return (
    <div className="navLeft">
      <div className="logo">
        <img src={logo} width={20} alt="" />
        <h1>Pengyuan Smart Park</h1>
      </div>
      <Menu
        defaultSelectedKeys={["/dashboard"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={menuData}
        onClick={handleClick}
        selectedKeys={[location.pathname]}
      />
    </div>
  );
}
