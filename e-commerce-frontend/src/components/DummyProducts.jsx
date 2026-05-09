import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function DummyProducts() {
  let products = [
    {
      imageSrc:
        "https://adroshifashion.in/cdn/shop/files/01-2.jpg?v=1736156464",
      title: "Long Flowing Dress",
    },
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/81IBgQiRoXL._AC_UF1000,1000_QL80_.jpg",
      title: "RC cars",
    },
    {
      imageSrc:
        "https://imagescdn.pantaloons.com/img/app/product/1/1210306-27955929.jpg?auto=format&w=220",
      title: "Shoes",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHyQ4-swhNvCV2lm142jxwj7AfX880takXQ&s",
      title: "laptop",
    }
  ];
  return (
    <Row xs={1} md={4} className="g-4">
      {products.map((item, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item.imageSrc} height="400px" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button className="btn btn-warning">Add to Cart</button>
              <button className="btn btn-success mx-2">Buy</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DummyProducts;
