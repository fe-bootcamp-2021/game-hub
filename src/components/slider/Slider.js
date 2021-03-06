import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import img1 from "../../img/g1.png";
import styles from "./Slider.module.css";
// import img2 from "../../img/spin.png";
// import img3 from "../../img/animationSpin.gif";
// import img4 from "../../img/logo1.png";
// import img5 from "../../img/logo.jpg";

const images = [
  { src: img1 },
  // { src: img2 },
  // { src: img3 },
  // { src: img4 },
  // { src: img5 },
];

export default function Slider() {
  return (
    <>
      <div className={styles.parentCarousel}>
        <div className={styles.slid}>
          <Carousel
            className={styles.container}
            isAutoPlaying={true}
            autoPlayInterval={3000}
            images={images}
            leftIcon={false}
            rightIcon={false}
            miniIcon={false}
            maxIcon={false}
          />
        </div>
      </div>
    </>
  );
}
