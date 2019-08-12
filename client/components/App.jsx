import React from 'react';
import { Carousel } from "react-responsive-carousel";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel>
        <div>
          <img src="https://fec-photo-gallery-ks.s3-us-west-1.amazonaws.com/1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://fec-photo-gallery-ks.s3-us-west-1.amazonaws.com/2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://fec-photo-gallery-ks.s3-us-west-1.amazonaws.com/3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://fec-photo-gallery-ks.s3-us-west-1.amazonaws.com/4.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://fec-photo-gallery-ks.s3-us-west-1.amazonaws.com/5.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    )
  }
}

export default App;