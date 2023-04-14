import { Col, Row } from "react-bootstrap";
import dataItems from "../data/data.json";
import StoreItem from "../components/StoreItem";

export const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {dataItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
