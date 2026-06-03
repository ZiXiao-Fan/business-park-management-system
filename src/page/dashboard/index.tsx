import { Row, Col, Card, Progress, Statistic, Timeline, Tag } from "antd";
import {
  RadarChartOutlined,
  DollarOutlined,
  SnippetsOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { getEnergyData } from "../../api/dashboard";
import "./index.scss";

type EChartsOption = echarts.EChartsOption;

const qualificationOption: EChartsOption = {
  title: {
    text: "Company Qualification Overview",
  },
  legend: {
    top: 8,
    left: "center",
  },
  tooltip: {},
  dataset: {
    source: [
      ["category", "Tech Companies", "High-Tech Companies", "State-Owned Companies"],
      ["2014", 5, 3, 20],
      ["2016", 200, 30, 180],
      ["2018", 390, 420, 220],
      ["2020", 620, 450, 280],
      ["2022", 1100, 590, 390],
      ["2024", 1200, 670, 410],
    ],
  },
  xAxis: { type: "category" },
  yAxis: {},
  series: [
    { name: "Tech Companies", type: "bar" },
    { name: "High-Tech Companies", type: "bar" },
    { name: "State-Owned Companies", type: "bar" },
  ],
};

const leaseOption: EChartsOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Leasing Status",
      type: "pie",
      radius: ["20%", "70%"],
      center: ["50%", "60%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 10,
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 1048, name: "Operating" },
        { value: 1000, name: "Leased" },
        { value: 800, name: "Available for Rent" },
        { value: 750, name: "Renewed" },
        { value: 700, name: "New Lease" },
        { value: 650, name: "Pending Lease" },
        { value: 550, name: "Move-Out" },
      ],
    },
  ],
};

export default function Dashboard() {
  const initialOption = {
    title: {
      text: "Today's Energy Consumption",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [],
  };

  const [data, setData] = useState(initialOption);

  useEffect(() => {
    const loadData = async () => {
      const { data: apiData } = await getEnergyData();
      const dataList = apiData.map((item: any) => ({
        name: item.name,
        type: "line",
        stack: "Total",
        data: item.data,
      }));

      const updatedOption = {
        ...data,
        legend: { data: dataList.map((item: any) => item.name) },
        series: dataList,
      };

      setData(updatedOption);
    };

    loadData();
  }, []);

  return (
    <div className="dashboard">
      <Row gutter={16}>
        <Col span={6}>
          <Card className="stat-card">
            <div className="stat-card__content area">
              <h2>12333</h2>
              <p>Total Park Area (sqm)</p>
            </div>
            <div className="stat-card__icon">
              <RadarChartOutlined className="icon" />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="stat-card">
            <div className="stat-card__content area">
              <h2>8635</h2>
              <p>Total Leased Area (sqm)</p>
            </div>
            <div className="stat-card__icon">
              <SnippetsOutlined className="icon" style={{ color: "#81c452" }} />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="stat-card">
            <div className="stat-card__content area">
              <h2>38764</h2>
              <p>Total Output Value (10k CNY)</p>
            </div>
            <div className="stat-card__icon">
              <DollarOutlined className="icon" style={{ color: "#62c9cb" }} />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="stat-card">
            <div className="stat-card__content area">
              <h2>2874</h2>
              <p>Total Resident Companies</p>
            </div>
            <div className="stat-card__icon">
              <LaptopOutlined className="icon" style={{ color: "#e49362" }} />
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="mt" gutter={16}>
        <Col span={12}>
          <Card title="Energy Consumption">
            <ReactECharts option={data} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Company Qualifications">
            <ReactECharts option={qualificationOption} />
          </Card>
        </Col>
      </Row>
      <Row className="mt" gutter={16}>
        <Col span={12}>
          <Card title="Leasing Overview">
            <ReactECharts option={leaseOption} />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Available Charging Piles">
            <div className="wrap">
              <Progress type="circle" percent={75} />
              <Statistic title="Total Charging Piles" value={75} suffix="/ 100" />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Live Vehicle Activity" style={{ height: "405px" }}>
            <Timeline
              items={[
                { children: <><Tag color="green">Entry</Tag>08:24 Vehicle BJ-A66666</> },
                { children: <><Tag color="red">Exit</Tag>09:15 Vehicle BJ-A66666</>, color: "red" },
                { children: <><Tag color="green">Entry</Tag>09:22 Vehicle BJ-A23456</> },
                { children: <><Tag color="red">Exit</Tag>10:43 Vehicle BJ-A18763</>, color: "red" },
                { children: <><Tag color="green">Entry</Tag>13:38 Vehicle BJ-A88888</> },
                { children: <><Tag color="green">Entry</Tag>14:46 Vehicle BJ-A23456</> },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
