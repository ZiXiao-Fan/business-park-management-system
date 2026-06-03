import { Row, Col, Card, Image, Radio, Spin } from "antd";
import { useEffect, useState } from "react";
import type { RadioChangeEvent } from "antd/lib/radio";
import { getRoomList } from "../../../api/room";
import "./roomList.scss";

interface RoomType {
  roomNumber: string;
  decorationType: "Unfurnished" | "Fully Furnished";
  area: number;
  unitPrice: number;
  src: string;
}

export default function EstateRoom() {
  const [open, setOpen] = useState<boolean>(false);
  const [room, setRoom] = useState<RoomType[]>([]);
  const [src, setSrc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const loadRoom = async (roomid: string) => {
    setLoading(true);
    const {
      data: { rooms },
    } = await getRoomList(roomid);
    setRoom(rooms);
    setLoading(false);
  };

  const handleChange = (e: RadioChangeEvent) => {
    const roomid: string = e.target.value;
    loadRoom(roomid);
  };

  useEffect(() => {
    loadRoom("a1");
  }, []);

  const showImage = (roomSrc: string) => {
    setSrc(roomSrc);
    setOpen(true);
  };

  return (
    <>
      <Image
        width={200}
        style={{ display: "none" }}
        preview={{
          open,
          src,
          onOpenChange: (value) => {
            setOpen(value);
          },
        }}
      />
      <Card>
        <Radio.Group defaultValue="a1" buttonStyle="solid" optionType="button" onChange={handleChange}>
          <Radio.Button value="a1">A1 Office Tower</Radio.Button>
          <Radio.Button value="a2">A2 Office Tower</Radio.Button>
          <Radio.Button value="b1">B1 Office Tower</Radio.Button>
          <Radio.Button value="b2">B2 Office Tower</Radio.Button>
          <Radio.Button value="c1">C1 Office Tower</Radio.Button>
          <Radio.Button value="c2">C2 Office Tower</Radio.Button>
          <Radio.Button value="d1">Tianhui International Tower A</Radio.Button>
          <Radio.Button value="d2">Times Financial Plaza</Radio.Button>
        </Radio.Group>
      </Card>
      <Spin spinning={loading}>
        <Row gutter={16}>
          {room.map((item) => {
            return (
              <Col span={6} className="item" key={item.roomNumber}>
                <Card title="Room Number" extra={<a onClick={() => showImage(item.src)}>Floor Plan</a>}>
                  <h1>{item.roomNumber}</h1>
                  <div className="clearfix mt">
                    <p className="fl">Fit-Out:</p>
                    <p className="fr">{item.decorationType}</p>
                  </div>
                  <div className="clearfix mt">
                    <p className="fl">Area</p>
                    <p className="fr">{item.area} sqm</p>
                  </div>
                  <div className="clearfix mt">
                    <p className="fl">Unit Price</p>
                    <p className="fr">CNY {item.unitPrice}/sqm/day</p>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Spin>
    </>
  );
}
