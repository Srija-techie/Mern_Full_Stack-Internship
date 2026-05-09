import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';

function CarouselContainer() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <CarouselImage text="https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-digital-retailing-illustration-laptop-keyboard-with-shopping-basket-and-e-commerce-image_3903657.jpg" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CarouselImage text="https://png.pngtree.com/thumb_back/fh260/background/20230620/pngtree-online-shopping-in-antigua-and-barbuda-a-stunning-3d-render-for-image_3649237.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="https://static.vecteezy.com/system/resources/thumbnails/042/594/251/small/3d-conceptual-illustration-of-product-exchange-and-return-policy-vector.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;