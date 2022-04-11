import React from "react";
import Buttons from "../Buttons";
import "../../Assets/Css/Home/Div1Home.css";
import pic1 from "../../Assets/Images/products/pro-1.jpg"
import pic2 from "../../Assets/Images/products/pro-2.jpg"
import pic3 from "../../Assets/Images/products/pro-3.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Div1Home() {
  var settings = {
    dots: true,
    delay:3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay:true,
    slidesToScroll: 1
  };
  return (
   
   
    <section className="top-products">
      <div className=" justify-center items-center">
        <div className="buttons items-center">
          <div className="slider-btn prev-btn">
            <img src="./images/icons/pre-1.svg" alt="" />
          </div>
          <div className="slider-btn next-btn">
            <img src="./images/icons/next-1.svg" alt="" />
          </div>
        </div>
        <Slider {...settings} className="slider">
          <div className="food-card">
            <div className="prod-img ">
              <img src={pic1} alt="" />
              <div className="Div1-card">
                <h2>A Great Place For Learning</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
                  nisi. Accusamus dolores quas, qui repudiandae delectus a
                  eligendi totam architecto, accusantium nisi ea, sequi facere.
                  Esse natus molestias tempore quis.
                </p>
                <div className="button flex">
                  <Buttons look="dark" title="Get Started" />
                  <Buttons look="light" title="Get Our Courses" />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="food-card">
            <div className="prod-img ">
              <img src={pic2} alt="" />
              <div className="Div1-card">
                <h2>The Great Place For Learning</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit eos autem veniam. Ea quis, asperiores obcaecati
                  harum odit veniam hic provident magni voluptas corporis odio
                  natus aliquid facilis eos. Quibusdam.
                </p>
                <div className="button flex">
                  <Buttons look="dark" title="Get Started" />
                  <Buttons look="light" title="Get Our Courses" />
                </div>
              </div>
            </div>
          </div>
          <div className="food-card">
            <div className="prod-img ">
              <img src={pic3} alt="" />
              <div className="Div1-card">
                <h2>Solid hai bhai Everyone is Our Goal</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit eos autem veniam. Ea quis, asperiores obcaecati
                  harum odit veniam hic provident magni voluptas corporis odio
                  natus aliquid facilis eos. Quibusdam.
                </p>
                <div className="button flex">
                  <Buttons look="dark" title="Get Started" />
                  <Buttons look="light" title="Get Our Courses" />
                </div>
              </div>
            </div>
          </div>
          </Slider>
      </div>
    </section>
  );
}
