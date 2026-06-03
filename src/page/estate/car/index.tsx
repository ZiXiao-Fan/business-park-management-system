import { Col, Row, Table, Card, Input, Tabs, Button, Image } from "antd";
import type { TabsProps, TableProps } from "antd";
import come from "../../../assets/come.jpg";

interface DataType {
  key: string;
  orderNo: string;
  date: string;
  carNo: string;
  type: string;
  startDate: string;
  time: string;
  count: string;
  cost: string;
}

interface DataType2 {
  key: string;
  carNo: string;
  name: string;
  tel: string;
  type: string;
  rest: string;
  time: string;
  pic: string;
}

const columns: TableProps<DataType>["columns"] = [
  { title: "No.", key: "index", render: (_, __, index) => index + 1 },
  { title: "Order No.", dataIndex: "orderNo", key: "orderNo" },
  { title: "Order Date", dataIndex: "date", key: "date" },
  { title: "License Plate", dataIndex: "carNo", key: "carNo" },
  { title: "Vehicle Type", dataIndex: "type", key: "type" },
  { title: "Charging Start Time", dataIndex: "startDate", key: "startDate" },
  { title: "Charging Duration", dataIndex: "time", key: "time" },
  { title: "Power Charged", dataIndex: "count", key: "count" },
  { title: "Charging Cost", dataIndex: "cost", key: "cost" },
  {
    title: "Actions",
    dataIndex: "operate",
    key: "operate",
    render: () => <Button type="primary" size="small">View</Button>,
  },
];

const data: DataType[] = Array.from({ length: 8 }, (_, index) => ({
  key: `${index + 1}`,
  orderNo: "CD9872380",
  date: "2024-02-13",
  carNo: "BJ-A88888",
  type: "Owned Vehicle",
  startDate: "2024-02-13 15:33:12",
  time: "2h 25m",
  count: "30kw",
  cost: "¥40.50",
}));

const columns2: TableProps<DataType2>["columns"] = [
  { title: "No.", key: "index", render: (_, __, index) => index + 1 },
  { title: "License Plate", dataIndex: "carNo", key: "carNo" },
  { title: "Owner Name", dataIndex: "name", key: "name" },
  { title: "Owner Phone", dataIndex: "tel", key: "tel" },
  { title: "Lease Type", dataIndex: "type", key: "type" },
  { title: "Lease Remaining", dataIndex: "rest", key: "rest" },
  { title: "Overdue Days", dataIndex: "time", key: "time" },
  {
    title: "Entry Photo",
    dataIndex: "pic",
    key: "pic",
    render: () => (
      <Image
        src={come}
        width={50}
        placeholder={<Image preview={false} src={come} width={150} />}
      />
    ),
  },
  {
    title: "Actions",
    dataIndex: "operate",
    key: "operate",
    render: () => (
      <>
        <Button type="primary" size="small" className="mr">
          Edit
        </Button>
        <Button type="primary" size="small" danger>
          Delete
        </Button>
      </>
    ),
  },
];

const data2: DataType2[] = Array.from({ length: 8 }, (_, index) => ({
  key: `${index + 1}`,
  carNo: "BJ-A88888",
  name: "Wang Li",
  tel: "18876543210",
  type: "Long-Term Lease",
  rest: "135 days",
  time: "0 days",
  pic: "",
}));

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Charging Records",
    children: <Table columns={columns} dataSource={data} />,
  },
  {
    key: "2",
    label: "Vehicles in the Park",
    children: <Table columns={columns2} dataSource={data2} />,
  },
];

export default function EstateCar() {
  return (
    <div>
      <Card className="mt">
        <Row gutter={16}>
          <Col span={8}>
            <Input placeholder="Enter plate number, phone number, or contact person" />
          </Col>
          <Col>
            <Button type="primary">Search</Button>
          </Col>
        </Row>
      </Card>
      <Card className="mt">
        <Tabs items={items} />
      </Card>
    </div>
  );
}
