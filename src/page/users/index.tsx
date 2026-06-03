import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Card, Row, Col, Button, Input, Table, Tag, message, Pagination, Popconfirm } from "antd";
import type { TableProps, PaginationProps } from "antd";
import type { DataType } from "./interface";
import { useDispatch } from "react-redux";
import { getUserList, deleteUser, batchDeleteUser } from "../../api/userList";
import { setUserData } from "../../store/user/userSlice";
import UserForm from "./userForm";

interface FormDataType {
  companyName: string;
  contact: string;
  phone: string;
}

export default function Users() {
  const [dataList, setDataList] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormDataType>({
    companyName: "",
    contact: "",
    phone: "",
  });

  useEffect(() => {
    loadData();
  }, [page, pageSize]);

  const disabled = useMemo(() => !selectedRowKeys.length, [selectedRowKeys]);

  const loadData = async () => {
    setLoading(true);
    const {
      data: { list, total },
    } = await getUserList({ ...formData, page, pageSize });
    setLoading(false);
    setDataList(list);
    setTotal(total);
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const selectedOnChange = (keys: React.Key[]) => {
    setSelectedRowKeys(keys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: selectedOnChange,
  };

  const onChange: PaginationProps["onChange"] = (nextPage, nextPageSize) => {
    setPage(nextPage);
    setPageSize(nextPageSize);
  };

  const reset = () => {
    setSelectedRowKeys([]);
    setPage(1);
    setPageSize(10);
    setFormData({
      companyName: "",
      contact: "",
      phone: "",
    });
    loadData();
  };

  const confirm = async (id: string) => {
    const { data } = await deleteUser(id);
    message.success(data);
    loadData();
  };

  const batchDelete = async () => {
    const { data } = await batchDeleteUser(selectedRowKeys);
    message.success(data);
    loadData();
  };

  const edit = (record: DataType) => {
    setIsModalOpen(true);
    setModalTitle("Edit Company");
    dispatch(setUserData(record));
  };

  const add = () => {
    setIsModalOpen(true);
    setModalTitle("Add Company");
    dispatch(setUserData({}));
  };

  const hideModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No.",
      key: "index",
      render(_, __, index) {
        return index + 1;
      },
    },
    {
      title: "Company Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Operating Status",
      dataIndex: "status",
      key: "status",
      render(value) {
        if (value == 1) {
          return <Tag color="green">Operating</Tag>;
        }
        if (value == 2) {
          return <Tag color="#f50">Suspended</Tag>;
        }
        if (value == 3) {
          return <Tag color="red">Closed</Tag>;
        }
      },
    },
    {
      title: "Phone Number",
      dataIndex: "tel",
      key: "tel",
    },
    {
      title: "Industry",
      dataIndex: "business",
      key: "business",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Unified Credit Code",
      dataIndex: "creditCode",
      key: "creditCode",
    },
    {
      title: "Business Registration No.",
      dataIndex: "industryNum",
      key: "industryNum",
    },
    {
      title: "Organization Code",
      dataIndex: "organizationCode",
      key: "organizationCode",
    },
    {
      title: "Legal Representative",
      dataIndex: "legalPerson",
      key: "legalPerson",
    },
    {
      title: "Actions",
      dataIndex: "operate",
      width: 160,
      render(_, record) {
        return (
          <div style={{ display: "flex", gap: 8, whiteSpace: "nowrap" }}>
            <Button type="primary" size="small" onClick={() => edit(record)}>
              Edit
            </Button>
            <Popconfirm
              title="Delete Confirmation"
              description="Are you sure you want to delete this item?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => confirm(record.id)}
            >
              <Button type="primary" danger size="small">
                Delete
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <MyUserForm visible={isModalOpen} hideModal={hideModal} title={modalTitle} />
      <Card className="search">
        <Row gutter={16}>
          <Col span={7}>
            <p>Company Name:</p>
            <Input name="companyName" value={formData.companyName} onChange={handleOnchange} />
          </Col>
          <Col span={7}>
            <p>Contact Person:</p>
            <Input name="contact" value={formData.contact} onChange={handleOnchange} />
          </Col>
          <Col span={7}>
            <p>Phone Number:</p>
            <Input name="phone" value={formData.phone} onChange={handleOnchange} />
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={loadData}>
              Search
            </Button>
            <Button className="ml" onClick={reset}>
              Reset
            </Button>
          </Col>
        </Row>
      </Card>
      <Card className="mt tr">
        <Button type="primary" className="mr" onClick={add}>
          Add Company
        </Button>
        <Button type="primary" danger disabled={disabled} onClick={batchDelete}>
          Batch Delete
        </Button>
      </Card>
      <Card className="mt clearfix">
        <Table
          dataSource={dataList}
          columns={columns}
          rowKey={(record) => record.id}
          loading={loading}
          rowSelection={rowSelection}
          pagination={false}
        />

        <Pagination
          className="mt fr mb"
          current={page}
          pageSize={pageSize}
          total={total}
          showSizeChanger
          showQuickJumper
          showTotal={(count) => `Total ${count} items`}
          onChange={onChange}
        />
      </Card>
    </>
  );
}

const MyUserForm = React.memo(UserForm);
