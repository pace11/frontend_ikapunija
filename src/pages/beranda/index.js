import React from 'react'
import Slider from 'react-slick'
import ImgSponsor from '../../__json__'

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section className="p-b-0">
      <div className="container">
        <div
          className="heading-text heading-section text-center m-b-40"
          data-animate="fadeInUp"
        >
          <Slider {...settings}>
            {ImgSponsor &&
              ImgSponsor.logo_sponsorship.map((item, idx) => (
                <div key={String(idx)}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '120px',
                        height: '120px',
                        backgroundImage: `url(${item.img_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
      <style>
        {`
          button.slick-arrow.slick-next,
          button.slick-arrow.slick-prev {
            width: auto;
            height: auto;
          }
          button.slick-arrow.slick-next:before,
          button.slick-arrow.slick-prev:before {
            font-size: 30px !important;
            color: #27bebe !important;
          }
          button.slick-arrow.slick-next {
            margin-right: 10px;
          }
        `}
      </style>
    </section>
  )
}
