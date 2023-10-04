import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from 'react-router-dom';

const DoctorCard = ({doct}) => {
    const {_id,photo, name, designation} = doct;
    return (
        <div>
                  <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={photo}
                  alt="Doctor"
                  className="rounded-3xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{designation}</p>
                <div className="card-actions">
                  <Link to={`/booking/${_id}`}><button className="btn btn-outline btn-primary">For Serial</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
        </div>
    );
};

export default DoctorCard;