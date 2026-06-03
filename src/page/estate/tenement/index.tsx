import { Col, Row, Table, Card, Input, Button, Tag, Progress, Badge } from "antd";
import type { TableProps } from "antd/lib/table";

interface DataType {
  key: string;
  name: string;
  person: string;
  tel: string;
  status: string;
  vacancyRate: number;
  propertyFee: string;
}

const colums: TableProps<DataType>["columns"] = [
  { title: "No.", key: "index", render: (_, __, index) => index + 1 },
  { title: "Building Name", key: "name", dataIndex: "name" },
  { title: "Manager", key: "person", dataIndex: "person" },
  { title: "Manager Phone", key: "tel", dataIndex: "tel" },
  {
    title: "Usage Status",
    key: "status",
    dataIndex: "status",
    render: (value) => {
      if (value == 1) {
        return <Tag color="#f50">Under Construction</Tag>;
      }
      if (value == 2) {
        return <Tag color="#2db7f5">Completed</Tag>;
      }
      return <Tag color="#87d068">In Use</Tag>;
    },
  },
  {
    title: "Vacancy Rate",
    key: "vacancyRate",
    dataIndex: "vacancyRate",
    render(value) {
      return <Progress percent={value} size="small" status="active" />;
    },
  },
  {
    title: "Property Fee Rate",
    key: "propertyFee",
    dataIndex: "propertyFee",
    render(value) {
      return <Badge color="green" text={value} />;
    },
  },
  {
    title: "Actions",
    dataIndex: "operation",
    render() {
      return (
        <>
          <Button type="primary" className="mr">
            Edit
          </Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </>
      );
    },
  },
];

const data: DataType[] = [
  { key: "1", name: "A1 Office Tower", person: "Wang Da", tel: "16654789654", status: "1", vacancyRate: 60, propertyFee: "3.5%" },
  { key: "2", name: "A2 Office Tower", person: "Su Lekai", tel: "13698756669", status: "2", vacancyRate: 40, propertyFee: "3.8%" },
  { key: "3", name: "B1 Office Tower", person: "Liya", tel: "15587966698", status: "3", vacancyRate: 20, propertyFee: "3.1%" },
  { key: "4", name: "B2 Office Tower", person: "Chang Ke", tel: "13698756324", status: "3", vacancyRate: 30, propertyFee: "4.0%" },
  { key: "5", name: "C1 Office Tower", person: "Liu Wei", tel: "19878965444", status: "1", vacancyRate: 50, propertyFee: "3.5%" },
  { key: "6", name: "C2 Office Tower", person: "Sun Qianghao", tel: "13369888562", status: "3", vacancyRate: 10, propertyFee: "2.9%" },
  { key: "7", name: "Tianhui International Tower A", person: "Ma Haohan", tel: "13578549687", status: "3", vacancyRate: 25, propertyFee: "3.7%" },
  { key: "8", name: "Times Financial Plaza", person: "Yang Liu", tel: "18745889874", status: "2", vacancyRate: 15, propertyFee: "3.3%" },
];

export default function EstateTenement() {
  return (
    <>
      <Card className="search">
        <Row gutter={16}>
          <Col span={4}>
            <p>Building Name:</p>
            <Input />
          </Col>
          <Col span={4}>
            <p>Manager:</p>
            <Input />
          </Col>
          <Col span={4}>
            <Button type="primary">Search</Button>
            <Button className="ml">Reset</Button>
          </Col>
        </Row>
      </Card>
      <Card className="mt">
        <Table columns={colums} dataSource={data} />
      </Card>
    </>
  );
}
