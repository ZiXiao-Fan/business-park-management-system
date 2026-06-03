import { Modal, Form, Row, Col, Input, Radio } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface FormProps {
  visible: boolean;
  hideModal: () => void;
  title: string;
}

function UserForm(props: FormProps) {
  const [form] = Form.useForm();
  const { userData } = useSelector((state: any) => state.userSlice);
  const { visible, hideModal, title } = props;

  useEffect(() => {
    title == "Add Company" ? form.resetFields() : form.setFieldsValue(userData);
  }, [visible]);

  return (
    <Modal title={title} open={visible} onCancel={hideModal} width={800}>
      <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Company Name"
              name="name"
              rules={[
                { required: true, message: "Company name is required." },
                { pattern: /^[3-9]\d{9}$/, message: "Please enter a valid phone number." },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="tel"
              rules={[{ required: true, message: "Phone number is required." }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Industry"
              name="business"
              rules={[{ required: true, message: "Industry is required." }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Operating Status"
              name="status"
              rules={[{ required: true, message: "Operating status is required." }]}
            >
              <Radio.Group>
                <Radio value="1">Operating</Radio>
                <Radio value="2">Suspended</Radio>
                <Radio value="3">Closed</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Email is required." }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Unified Credit Code"
              name="creditCode"
              rules={[{ required: true, message: "Unified credit code is required." }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Business Registration No."
              name="industryNum"
              rules={[{ required: true, message: "Business registration number is required." }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Organization Code"
              name="organizationCode"
              rules={[{ required: true, message: "Organization code is required." }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Legal Representative"
              name="legalPerson"
              rules={[{ required: true, message: "Legal representative is required." }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default UserForm;
