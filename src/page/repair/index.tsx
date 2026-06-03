import { Col, Row, Table, Card, Input, Button, Tag } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  orderNo: string;
  name: string;
  tel: string;
  address: string;
  description: string;
  status: string;
  time: string;
}

const data: DataType[] = [
  {
    key: "1",
    orderNo: "BX1236984",
    name: "Liu Kuan",
    tel: "13498765432",
    address: "Room 502, A2 Office Tower",
    description: "Air conditioner cooling issue with intermittent cooling and poor performance.",
    status: "1",
    time: "2024-05-30 13:37",
  },
  {
    key: "2",
    orderNo: "BX1236984",
    name: "Liu Kuan",
    tel: "13498765432",
    address: "Room 502, A2 Office Tower",
    description: "Air conditioner cooling issue with intermittent cooling and poor performance.",
    status: "2",
    time: "2024-05-30 13:37",
  },
  {
    key: "3",
    orderNo: "BX1236984",
    name: "Liu Kuan",
    tel: "13498765432",
    address: "Room 502, A2 Office Tower",
    description: "Air conditioner cooling issue with intermittent cooling and poor performance.",
    status: "3",
    time: "2024-05-30 13:37",
  },
  {
    key: "4",
    orderNo: "BX1236984",
    name: "Liu Kuan",
    tel: "13498765432",
    address: "Room 502, A2 Office Tower",
    description: "Air conditioner cooling issue with intermittent cooling and poor performance.",
    status: "1",
    time: "2024-05-30 13:37",
  },
  {
    key: "5",
    orderNo: "BX1236984",
    name: "Liu Kuan",
    tel: "13498765432",
    address: "Room 502, A2 Office Tower",
    description: "Air conditioner cooling issue with intermittent cooling and poor performance.",
    status: "3",
    time: "2024-05-30 13:37",
  },
  {
    key: "6",
    orderNo: "BX1236984",
    name: "Liu Kuan",
    tel: "13498765432",
    address: "Room 502, A2 Office Tower",
    description: "Air conditioner cooling issue with intermittent cooling and poor performance.",
    status: "2",
    time: "2024-05-30 13:37",
  },
];

const columns: TableProps<DataType>["columns"] = [
  { title: "No.", key: "index", render: (_, __, index) => index + 1 },
  { title: "Work Order No.", dataIndex: "orderNo", key: "orderNo" },
  { title: "Reported By", dataIndex: "name", key: "name" },
  { title: "Reporter Phone", dataIndex: "tel", key: "tel" },
  { title: "Repair Address", dataIndex: "address", key: "address" },
  { title: "Issue Description", dataIndex: "description", key: "description" },
  {
    title: "Repair Status",
    dataIndex: "status",
    key: "status",
    render(value) {
      if (value == 1) {
        return <Tag color="f50">Pending</Tag>;
      }
      if (value == 2) {
        return <Tag color="2db7f5">In Progress</Tag>;
      }
      return <Tag color="green">Completed</Tag>;
    },
  },
  { title: "Reported Time", dataIndex: "time", key: "time" },
  {
    title: "Actions",
    key: "operate",
    dataIndex: "operate",
    render(_, record) {
      if (record.status === "1") {
        return <Button type="primary" size="small">Assign</Button>;
      }
      if (record.status === "2") {
        return <a href="#">In progress...</a>;
      }
      return <Button type="primary" size="small">Complete</Button>;
    },
  },
];

export default function Repair() {
  return (
    <div>
      <Card>
        <Row>
          <Col span={8}>
            <Input placeholder="Enter work order number" />
          </Col>
          <Col span={8}>
            <Button type="primary" className="ml">
              Search
            </Button>
          </Col>
        </Row>
      </Card>
      <Card className="mt">
        <Table dataSource={data} columns={columns} />
      </Card>
    </div>
  );
}
