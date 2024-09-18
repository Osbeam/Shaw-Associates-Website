import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BlogSlider.css";  // Import the external CSS
import img1 from '../Images/Rectangle 64.png'
import img2 from '../Images/Rectangle 65.png'
import img3 from '../Images/BLog1.png'
import img4 from '../Images/Rectangle 76.png'

function BlogSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,      // Default number of slides to show (for larger screens)
    speed: 100,
    arrows: false,
    dots: true,
    autoplay: true,       // Enable autoplay
    autoplaySpeed: 3000,  // Set the interval to 3 seconds
    responsive: [
      {
        breakpoint: 576, // Mobile screen width
        settings: {
          slidesToShow: 1,  // Show 1 slide at a time on screens smaller than 576px
          centerPadding: "0px",  // Adjust padding for mobile view
        }
      }
    ]
  };  

  return (
    <div className="slider-container-main">
      <Slider {...settings}>
        <div className="slide-blog">
        <a href="/blog-gst" style={{textDecoration:'none', color:'black'}}>
          <div className="slide-container">
            <div className="img-container"><img src={img1} /></div>
            <div className="slide-text"><h4>What is GST and
              Why is it Important? </h4></div>
          </div>
          </a>
        </div>
        <div className="slide-blog">
          <a href="/blog-itr" style={{textDecoration:'none', color:'black'}}>
          <div className="slide-container">
            <div className="img-container"><img src={img2} /></div>
            <div className="slide-text"><h4>IRT Filing</h4></div>
          </div>
          </a>
        </div>
        <div className="slide-blog">
        <a href="/blog-tax-plan" style={{textDecoration:'none', color:'black'}}>
          <div className="slide-container">
            <div className="img-container"><img src={img4} /></div>
            <div className="slide-text"><h4>Tax Planning Tips for Freelancers and Gig Workers</h4></div>
          </div>
          </a>
        </div>
        <div className="slide-blog">
        <a href="/blog" style={{textDecoration:'none', color:'black'}}>
          <div className="slide-container">
            <div className="img-container"><img src={img3} /></div>
            <div className="slide-text"><h4>Top 5 Tax-Saving Strategies for
              the Upcoming Fiscal Year</h4></div>
          </div>
          </a>
        </div>

      </Slider>
    </div>
  );
}

export default BlogSlider;
