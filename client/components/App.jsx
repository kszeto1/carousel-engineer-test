import React from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../public/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
  }


  render() {
    return (
      <div>
        <a href={"../client/components/vanilla-slider/VanillaCarousel.html"}>Go to Vanilla Carousel</a>
        <Carousel infiniteLoop autoPlay transitionTime={1200} width="700px">
          <div>
            <img src="../imagesforslider/1.jpg" />
            <p className="legend">Avocado so delicious</p>
          </div>
          <div>
            <img src="../imagesforslider/2.jpg" />
            <p className="legend">We have more avocados</p>
          </div>
          <div>
            <img src="../imagesforslider/3.jpg" />
            <p className="legend">Don't forget about avocado toast</p>
          </div>
          <div>
            <img src="../imagesforslider/4.jpg" />
            <p className="legend">Cute avocado plushie</p>
          </div>
          <div>
            <img src="../imagesforslider/5.jpg" />
            <p className="legend">Nutritious meal</p>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default App;