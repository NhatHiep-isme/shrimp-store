import "./Banner.css";
import Slider from "react-slick";
import Banner1 from "../../assets/Banner/Banner1.jpg";

const slideImages = [
  {
    caption: "Slide 1",
    image: Banner1,
  },
  {
    caption: "Slide 2",
    image: Banner1,
  },
  {
    caption: "Slide 3",
    image: Banner1,
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
  };

  return (
    <div className="slide-container">
      <Slider className="slide" {...settings}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <img
              src={slideImage.image}
              alt={slideImage.caption}
              className="image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
