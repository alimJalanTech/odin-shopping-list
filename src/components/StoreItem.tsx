import { Card } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

const StoreItem: React.FC<StoreItemProps> = ({ id, name, price, img }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={img}
        height="200px"
        style={{ objectFit: "cover" }}
      />
    </Card>
  );
};

export default StoreItem;
