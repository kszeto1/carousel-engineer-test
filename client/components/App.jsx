import React from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../public/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel infiniteLoop autoPlay width="700px">
        <div>
          <img src="https://avochato-carousel.s3-us-west-1.amazonaws.com/1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://avochato-carousel.s3-us-west-1.amazonaws.com/2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://avochato-carousel.s3-us-west-1.amazonaws.com/3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://avochato-carousel.s3-us-west-1.amazonaws.com/4.jpg" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="https://avochato-carousel.s3-us-west-1.amazonaws.com/5.jpg" />
          <p className="legend">Legend 5</p>
        </div>
      </Carousel>
    )
  }
}

export default App;