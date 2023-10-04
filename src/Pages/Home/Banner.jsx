import React from 'react';
import photo1 from '../../photos/Slider/slider-1.jpg'
import photo2 from '../../photos/Slider/slider-2.jpg'
import photo3 from '../../photos/Slider/slider-3.jpg'


const Banner = () => {
    return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={photo1}
            className="w-full"
          />
          <div className="absolute bottom-1/2 left-5 space-y-5">
                <h2 className="text-5xl  text-black">Pathology Laboratory & <br /> Research Institvute</h2>
                <p className="text-lg text-black">Fully automatic & computerized laboratory with highest quality standards.</p>
                <button className="btn bg-orange-400 text-white">View Laboratory Test</button>
          </div>
          <div className="absolute flex justify-between  left-5 right-5 bottom-1/3">
            <a href="#slide3" className="btn btn-square ">
              ❮
            </a>
            <a href="#slide2" className="btn btn-square">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={photo2}
            className="w-full"
          />
          <div className="absolute bottom-1/2 left-5 space-y-5">
                <h2 className="text-5xl  text-black">Meet Our Professional Pathologists</h2>
                <p className="text-lg text-black">Meet Our Professional Pathologists</p>
                <button className="btn bg-orange-400 text-white">Meet Pathologist</button>
          </div>
          <div className="absolute flex justify-between  left-5 right-5 bottom-1/3">
            <a href="#slide1" className="btn btn-square">
              ❮
            </a>
            <a href="#slide3" className="btn btn-square">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={photo3}
            className="w-full"
          />
          <div className="absolute bottom-1/2 left-5 space-y-5">
                <h2 className="text-5xl  text-black">Our Prices Are <br /> Extremely Affordable</h2>
                <p className="text-lg text-black">Our fully inclusive prices are extremely competitive lorem ipsum sitamet.</p>
                <button className="btn bg-orange-400 text-white">View Pricing</button>
          </div>
          <div className="absolute flex justify-between left-5 right-5 bottom-1/3">
            <a href="#slide2" className="btn btn-square">
              ❮
            </a>
            <a href="#slide1" className="btn btn-square">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;