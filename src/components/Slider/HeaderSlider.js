import React from 'react'
import { sliderImgs } from '../../utils/images'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeaderSlider() {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className=''>
      <div className=''>
        <div className=''>
          <Slider {...settings}>
            <div>
              <img src={sliderImgs[0]} alt="img1" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider