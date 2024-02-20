import React from 'react'
import { sliderImgs } from '../../utils/images'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeaderSliders() {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='m-4 ' >
      <div className='mx-4'>
        <div>
          <Slider {...settings}>
            <div>
              <img src={sliderImgs[0]} alt="img1" />
            </div>
            <div>
              <img src={sliderImgs[1]} alt="img1" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HeaderSliders