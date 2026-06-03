import Mock from "mockjs";

Mock.setup({
  timeout: 200,
});

const companyNames = [
  "NovaWorks",
  "BluePeak",
  "CloudAxis",
  "Vertex Labs",
  "Aster Dynamics",
  "PrimeNest",
  "UrbanGrid",
];

const industries = [
  "Manufacturing",
  "Internet",
  "Media",
  "Beauty",
  "New Energy",
  "Logistics",
  "E-commerce",
];

const legalPeople = [
  "Olivia Carter",
  "Ethan Reed",
  "Sophia Brooks",
  "Liam Parker",
  "Mia Foster",
  "Noah Hayes",
];

const adminMenuList = [
  { icon: "DashboardOutlined", label: "Dashboard", key: "/dashboard" },
  {
    icon: "TeamOutlined",
    label: "Tenant Management",
    key: "/users",
    children: [
      { icon: "UnorderedListOutlined", label: "Tenant List", key: "/users/list" },
      { icon: "UserAddOutlined", label: "Add Tenant", key: "/users/add" },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "Property Management",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "Building Management",
        key: "/estate/tenement",
      },
      { icon: "BankOutlined", label: "Room Management", key: "/estate/room" },
      { icon: "TruckOutlined", label: "Vehicle Information", key: "/estate/car" },
    ],
  },
  { icon: "ToolOutlined", label: "Repair Management", key: "/repair" },
  {
    icon: "DollarOutlined",
    label: "Financial Management",
    key: "/finance",
    children: [
      { icon: "ProfileOutlined", label: "Contract Management", key: "/finance/contract" },
      { icon: "FrownOutlined", label: "Contract Details", key: "/finance/surrender" },
      { icon: "FileTextOutlined", label: "Bill Management", key: "/finance/bill" },
    ],
  },
  { icon: "TransactionOutlined", label: "Leasing Management", key: "/merchants" },
  {
    icon: "FundProjectionScreenOutlined",
    label: "Operations Management",
    key: "/operation",
    children: [
      { icon: "FundViewOutlined", label: "Operations Overview", key: "/operation/all" },
      { icon: "ReadOutlined", label: "Article Publishing", key: "/operation/article" },
      { icon: "CommentOutlined", label: "Content Comments", key: "/operation/comments" },
    ],
  },
  { icon: "ToolOutlined", label: "Equipment Management", key: "/equipment" },
  { icon: "ThunderboltOutlined", label: "Energy Consumption", key: "/energy" },
  { icon: "SettingOutlined", label: "System Settings", key: "/settings" },
  { icon: "UserOutlined", label: "Profile", key: "/personal" },
];

const userMenuList = [
  { icon: "DashboardOutlined", label: "Dashboard", key: "/dashboard" },
  {
    icon: "TeamOutlined",
    label: "Tenant Management",
    key: "/users",
    children: [
      { icon: "UnorderedListOutlined", label: "Tenant List", key: "/users/list" },
      { icon: "UserAddOutlined", label: "Add Tenant", key: "/users/add" },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "Property Management",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "Building Management",
        key: "/estate/tenement",
      },
      { icon: "BankOutlined", label: "Room Management", key: "/estate/room" },
      { icon: "TruckOutlined", label: "Vehicle Information", key: "/estate/car" },
    ],
  },
  { icon: "ToolOutlined", label: "Repair Management", key: "/repair" },
  { icon: "ToolOutlined", label: "Equipment Management", key: "/equipment" },
  { icon: "ThunderboltOutlined", label: "Energy Consumption", key: "/energy" },
  { icon: "UserOutlined", label: "Profile", key: "/personal" },
];

const managerMenuList = [
  { icon: "DashboardOutlined", label: "Dashboard", key: "/dashboard" },
  {
    icon: "TeamOutlined",
    label: "Tenant Management",
    key: "/users",
    children: [
      { icon: "UnorderedListOutlined", label: "Tenant List", key: "/users/list" },
      { icon: "UserAddOutlined", label: "Add Tenant", key: "/users/add" },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "Property Management",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "Building Management",
        key: "/estate/tenement",
      },
      { icon: "BankOutlined", label: "Room Management", key: "/estate/room" },
      { icon: "TruckOutlined", label: "Vehicle Information", key: "/estate/car" },
    ],
  },
  { icon: "ToolOutlined", label: "Repair Management", key: "/repair" },
  { icon: "TransactionOutlined", label: "Leasing Management", key: "/merchants" },
  {
    icon: "FundProjectionScreenOutlined",
    label: "Operations Management",
    key: "/operation",
    children: [
      { icon: "FundViewOutlined", label: "Operations Overview", key: "/operation/all" },
      { icon: "ReadOutlined", label: "Article Publishing", key: "/operation/article" },
      { icon: "CommentOutlined", label: "Content Comments", key: "/operation/comments" },
    ],
  },
  { icon: "ToolOutlined", label: "Equipment Management", key: "/equipment" },
  { icon: "ThunderboltOutlined", label: "Energy Consumption", key: "/energy" },
  { icon: "SettingOutlined", label: "System Settings", key: "/settings" },
  { icon: "UserOutlined", label: "Profile", key: "/personal" },
];

Mock.mock("https://www.demo.com/login", "post", (options) => {
  const { username, password } = JSON.parse(options.body);

  if (username === "admin" && password === "admin123") {
    return {
      code: 200,
      message: "Login successful",
      data: {
        username: "admin",
        token: "mocktoken123456admin",
      },
    };
  }

  if (username === "user" && password === "user123") {
    return {
      code: 200,
      message: "Login successful",
      data: {
        username: "user",
        token: "mocktoken123456user",
      },
    };
  }

  if (username === "manager" && password === "manager123") {
    return {
      code: 200,
      message: "Login successful",
      data: {
        username: "manager",
        token: "mocktoken123456manager",
      },
    };
  }

  return {
    code: 401,
    message: "Incorrect username or password.",
    data: "",
  };
});

Mock.mock("https://www.demo.com/menu", "get", () => {
  const token = sessionStorage.getItem("token");

  if (token === "mocktoken123456admin") {
    return { code: 200, message: "Request successful", data: adminMenuList };
  }

  if (token === "mocktoken123456user") {
    return { code: 200, message: "Request successful", data: userMenuList };
  }

  if (token === "mocktoken123456manager") {
    return { code: 200, message: "Request successful", data: managerMenuList };
  }

  return {
    code: 200,
    message: "Failed",
    data: [],
  };
});

Mock.mock("https://www.demo.com/energyData", "get", () => {
  return {
    code: 200,
    mesasage: "Request successful",
    data: [
      { name: "Coal", data: [120, 132, 101, 134, 90, 230, 210] },
      { name: "Gas", data: [220, 182, 191, 234, 290, 330, 310] },
      { name: "Oil", data: [150, 232, 201, 154, 190, 330, 410] },
      { name: "Electricity", data: [320, 332, 301, 334, 390, 330, 320] },
      { name: "Heat", data: [820, 932, 901, 934, 1290, 1330, 1320] },
    ],
  };
});

Mock.Random.extend({
  phone() {
    const phonePrefixes = ["132", "135", "189"];
    return this.pick(phonePrefixes) + Mock.mock(/\d{8}/);
  },
});

Mock.mock("https://www.demo.com/userList", "post", (options: any) => {
  const { pageSize, page, companyName, contact, phone } = JSON.parse(options.body);
  console.log("Tenant list params", page, pageSize, companyName, contact, phone);

  return {
    code: 200,
    message: "Success",
    data: Mock.mock({
      [`list|${pageSize}`]: [
        {
          id: "@string('number',6)",
          "name|1": companyNames,
          "status|1": ["1", "2", "3"],
          tel: "@phone",
          "business|1": industries,
          email: "@email",
          creditCode: "@string('upper',18)",
          industryNum: "@string('number',15)",
          organizationCode: "@string('upper',9)",
          "legalPerson|1": legalPeople,
        },
      ],
      total: 78,
    }),
  };
});

Mock.mock("https://www.demo.com/deleteUser", "post", (options: any) => {
  const { id } = JSON.parse(options.body);
  console.log("Delete company", id);

  return {
    code: 200,
    message: "Success",
    data: "Operation successful",
  };
});

Mock.mock("https://www.demo.com/batchDeleteUser", "post", (options: any) => {
  const { ids } = JSON.parse(options.body);
  console.log("ids", ids);

  return {
    code: 200,
    message: "Success",
    data: "Operation successful",
  };
});

Mock.mock("https://www.demo.com/editUser", "post", (options: any) => {
  console.log("Edit company params", JSON.parse(options.body));

  return {
    code: 200,
    message: "Success",
    data: "Operation successful",
  };
});

function generateRooms() {
  const rooms = [];

  for (let i = 0; i < 50; i++) {
    const floor = 1 + Math.floor(i / 6);
    const roomNumber = floor * 100 + (101 + (i % 6));

    rooms.push({
      roomNumber,
      decorationType: Mock.Random.pick(["Unfurnished", "Fully Furnished"]),
      area: Mock.Random.integer(70, 300),
      unitPrice: Mock.Random.integer(1, 3),
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    });
  }

  return rooms;
}

Mock.mock("https://www.demo.com/roomList", "post", (options: any) => {
  console.log("Received room id", JSON.parse(options.body).roomid);

  return {
    code: 200,
    message: "Success",
    data: {
      rooms: generateRooms(),
    },
  };
});
